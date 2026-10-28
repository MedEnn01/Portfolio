#!/usr/bin/env node
/* Contrôles de sécurité et d'intégrité du portfolio (aucune dépendance).
   Usage : node tools/check.js   -> code de sortie 1 si un contrôle échoue. */
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const exists = f => fs.existsSync(path.join(root, f));
const errors = [], warns = [];
const fail = m => errors.push(m), warn = m => warns.push(m);

/* 1) CSP : l'empreinte du script inline doit figurer dans la politique */
const html = read('index.html');
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const csp = (html.match(/Content-Security-Policy" content="([^"]*)"/) || [])[1];
if (!csp) fail('CSP absente de index.html');
else inline.forEach((code, i) => {
  const h = 'sha256-' + crypto.createHash('sha256').update(code, 'utf8').digest('base64');
  if (!csp.includes(h)) fail('CSP : empreinte du script inline #' + (i + 1) + ' absente. Ajoute \'' + h + '\' à script-src.');
});
if (csp && /unsafe-eval|script-src[^;]*'unsafe-inline'/.test(csp)) fail("CSP : 'unsafe-eval' ou 'unsafe-inline' dans script-src");

/* 2) aucune ressource externe chargée automatiquement */
if (/<(script|img|iframe|link)\b[^>]*\b(src|href)="https?:\/\/(?!(www\.)?(linkedin|github|x|facebook|instagram)\.com)/i.test(html.replace(/<a\b[^>]*>/g, '').replace(/<link rel="(canonical|sitemap)"[^>]*>/g, '').replace(/<meta[^>]*>/g, '')))
  fail('index.html charge une ressource externe (script/img/iframe/link)');
['assets/style.css', 'assets/app.js'].forEach(f => { if (/url\(\s*["']?https?:/i.test(read(f))) fail(f + ' : url() externe'); });
const js = read('assets/app.js');
if (/\beval\s*\(|new Function\s*\(|document\.write\s*\(|XMLHttpRequest/.test(js)) fail('app.js : eval/new Function/document.write/XHR détecté');
if ((js.match(/\bfetch\s*\(/g) || []).length > 1) fail('app.js : plus d\'un appel fetch (seul l\'envoi du formulaire est autorisé)');
/* politique CSP : seuls Turnstile et l'endpoint Apps Script peuvent être joints */
if (csp) {
  const dir = n => ((csp.match(new RegExp('(?:^|;)\\s*' + n + '\\s+([^;]*)')) || [])[1] || '').split(/\s+/).filter(x => /^https?:/.test(x));
  const only = (n, ok) => dir(n).forEach(h => { if (!ok.includes(h)) fail('CSP ' + n + ' : hôte non autorisé ' + h); });
  only('script-src', ['https://challenges.cloudflare.com']);
  only('frame-src', ['https://challenges.cloudflare.com']);
  only('connect-src', ['https://script.google.com', 'https://script.googleusercontent.com']);
  ['style-src', 'img-src', 'font-src', 'default-src', 'object-src'].forEach(n => { if (dir(n).length) fail('CSP ' + n + ' : hôte externe interdit'); });
}
const blank = (js.match(/target="_blank"/g) || []).length, noop = (js.match(/rel="noopener/g) || []).length;
if (blank > noop) warn('app.js : ' + blank + ' liens target=_blank pour ' + noop + ' rel=noopener');

/* 3) secrets et données personnelles */
const files = [];
(function walk(d) { fs.readdirSync(path.join(root, d), { withFileTypes: true }).forEach(e => {
  const rel = path.join(d, e.name);
  if (e.name === '.git' || e.name === 'node_modules') return;
  e.isDirectory() ? walk(rel) : files.push(rel);
}); })('.');
const textExt = /\.(js|gs|html|css|json|txt|xml|md|yml|yaml|svg)$/i;
const secrets = [/AKIA[0-9A-Z]{16}/, /gh[pousr]_[A-Za-z0-9]{30,}/, /github_pat_[A-Za-z0-9_]{30,}/, /xox[baprs]-[A-Za-z0-9-]{10,}/, /-----BEGIN (RSA |EC |OPENSSH |PGP )?PRIVATE KEY/, /AIza[0-9A-Za-z_-]{35}/, /(api[_-]?key|secret|password|passwd|token)\s*[:=]\s*["'][^"']{8,}["']/i];
files.filter(f => textExt.test(f)).forEach(f => {
  const c = read(f);
  secrets.forEach(r => { if (r.test(c)) fail('secret potentiel dans ' + f + ' (' + r + ')'); });
  if (!/tools[\\/]check\.js$/.test(f) && /\+212[\s\d]{9,}/.test(c)) fail('numéro de téléphone dans ' + f);
});
files.filter(f => /\.(key|pem|p12|pfx|env)$/i.test(f) || /(^|[\\/])\.env/.test(f)).forEach(f => fail('fichier sensible dans le dépôt : ' + f));

/* 4) données du portfolio */
const sandbox = { window: {} }; vm.createContext(sandbox); vm.runInContext(read('assets/data.js'), sandbox);
const P = sandbox.window.PORTFOLIO;
if (!P) fail('data.js : window.PORTFOLIO introuvable');
else {
  const bi = (o, label) => { if (!o || o.fr === undefined || o.en === undefined) fail(label + ' : traduction FR/EN manquante'); else if (Array.isArray(o.fr) && o.fr.length !== o.en.length) fail(label + ' : listes FR/EN de tailles différentes'); };
  const pub = P.projects.filter(p => !p.draft);
  P.projects.forEach(p => {
    ['title', 'summary', 'overview', 'context', 'work', 'results', 'stack'].forEach(k => bi(p[k], 'projet ' + p.slug + '.' + k));
    if (!exists(p.image)) fail('image absente : ' + p.image);
  });
  if (String(P.stats[0].value) !== String(pub.length)) warn('compteur de projets (' + P.stats[0].value + ') ≠ projets publics (' + pub.length + ')');
  if (String(P.stats[1].value) !== String(P.certifications.length)) warn('compteur de certifications (' + P.stats[1].value + ') ≠ ' + P.certifications.length);
  P.certifications.forEach(c => { if (c.file && !exists(c.file)) fail('certificat PDF absent : ' + c.file); if (c.url && !/^https:\/\//.test(c.url)) fail('lien non https : ' + c.name); });
  [].concat(...(P.proofs || []).map(g => g.items)).forEach(i => { if (i.url && !/^https:\/\/|^assets\//.test(i.url)) fail('lien de preuve non https : ' + i.label); });
  ['github', 'credly', 'linkedin', 'x', 'facebook', 'instagram'].forEach(k => { const v = P.person[k]; if (v && !/^https:\/\//.test(v)) fail('person.' + k + ' non https'); });
  (P.skills || []).forEach(s => bi(s.items, 'compétences ' + s.group.fr));
  const cf = P.contactForm || {};
  if (cf.endpoint || cf.siteKey) {
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(cf.endpoint || '')) fail('contactForm.endpoint : adresse Apps Script invalide');
    if (!/^0x[0-9A-Za-z_-]{8,}$/.test(cf.siteKey || '')) fail('contactForm.siteKey : clé de site Turnstile invalide (elle commence par 0x)');
    if (/^0x[0-9A-Za-z_-]+$/.test(cf.siteKey || '') && /secret/i.test(JSON.stringify(cf))) fail('contactForm : ne mets JAMAIS la clé secrète ici');
  }
}
/* 4b) contenus d'exemple et mode brouillon : avertissement, ERREUR avec --publish */
const PUBLISH = process.argv.includes('--publish');
if (P) {
  const pubData = { projects: P.projects.filter(p => !p.draft), timeline: P.timeline.filter(e => !e.draft),
    proofs: (P.proofs || []).map(g => g.items.filter(i => !i.draft)), planned: (P.certPlanned || []).filter(x => !x.draft) };
  const hits = (JSON.stringify(pubData).match(/\((exemple|example)\)|À compléter|To complete|#0000|000 points/g) || []).length;
  const emptyPub = [].concat(...(P.proofs || []).map(g => g.items.filter(i => !i.draft && !i.url))).length;
  const msg = [];
  if (P.showDrafts === true) msg.push('showDrafts est à true : brouillons et exemples visibles pour tout le monde');
  if (hits) msg.push(hits + ' texte(s) d\'exemple encore dans le contenu public');
  if (emptyPub) msg.push(emptyPub + ' profil(s) public(s) sans lien');
  msg.forEach(m => (PUBLISH ? fail : warn)('publication : ' + m));
}
/* 5) JSON-LD valide */
try { JSON.parse((html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1]); } catch (e) { fail('JSON-LD invalide'); }
['robots.txt', 'sitemap.xml', '404.html', '.nojekyll', 'assets/img/og-cover.png', 'backend/google-apps-script/Code.gs'].forEach(f => { if (!exists(f)) fail('fichier manquant : ' + f); });

warns.forEach(w => console.log('AVERTISSEMENT :', w));
errors.forEach(e => console.log('ERREUR       :', e));
console.log(errors.length ? '\n' + errors.length + ' erreur(s).' : '\nTous les contrôles sont passés (' + warns.length + ' avertissement(s)).');
process.exit(errors.length ? 1 : 0);
