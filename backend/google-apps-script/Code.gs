/**
 * Backend du formulaire de contact (Google Apps Script, compte Gmail dédié).
 *
 * - Aucun mot de passe dans le code : l'envoi passe par le compte Gmail qui possède ce script.
 * - Les secrets sont dans « Paramètres du projet > Propriétés du script » (jamais dans le dépôt) :
 *     TURNSTILE_SECRET   clé secrète Cloudflare Turnstile
 *     RECIPIENT          adresse qui reçoit les messages (ex. ennouaim159@gmail.com)
 *     ALLOWED_HOSTNAMES  domaines autorisés, séparés par des virgules (ex. ennouaim.com,www.ennouaim.com)
 */
var LIMITS = {
  name: 80, email: 254, subject: 120,
  messageMin: 10, messageMax: 4000,
  minDelayMs: 3000,              // un humain met plus de 3 s à remplir le formulaire
  maxAgeMs: 2 * 60 * 60 * 1000,  // formulaire ouvert depuis moins de 2 h
  perHour: 10,                   // messages acceptés par heure (tout le site)
  perEmailSec: 120,              // délai minimal entre 2 messages d'une même adresse
  fileMaxBytes: 2 * 1024 * 1024, // pièce jointe : 2 Mo maximum (une seule)
  fileName: 80
};
// extensions autorisées -> type MIME imposé par le serveur (le type annoncé par le navigateur est ignoré)
var FILE_TYPES = {
  pdf:  'application/pdf',
  png:  'image/png',
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  txt:  'text/plain',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};

function doGet() { return json_({ ok: true, service: 'contact' }); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var p = (e && e.parameter) || {};

    if (p.website) return json_({ ok: true });                 // piège à robots : champ caché rempli → on ignore en silence

    var age = Date.now() - Number(p.t || 0);
    if (!(age >= LIMITS.minDelayMs && age <= LIMITS.maxAgeMs)) return json_({ ok: false, error: 'timing' });

    var name = clean_(p.name, LIMITS.name);
    var email = clean_(p.email, LIMITS.email);
    var subject = clean_(p.subject, LIMITS.subject);
    var message = String(p.message || '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim();
    var okEmail = /^[^\s@<>"',;:]+@[^\s@<>"',;:]+\.[^\s@<>"',;:]{2,}$/.test(email);
    if (name.length < 2 || !okEmail || message.length < LIMITS.messageMin || message.length > LIMITS.messageMax) {
      return json_({ ok: false, error: 'fields' });
    }

    if (!verifyTurnstile_(p.token)) return json_({ ok: false, error: 'captcha' });

    var attachment = null;                                   // pièce jointe facultative, validée côté serveur
    if (p.fileData) {
      attachment = fileBlob_(p.fileName, p.fileData);
      if (!attachment) return json_({ ok: false, error: 'file' });
    }

    lock.waitLock(5000);
    if (!allow_(email)) return json_({ ok: false, error: 'rate' });

    var body = [
      'Nouveau message depuis le portfolio',
      '',
      'Nom     : ' + name,
      'E-mail  : ' + email,
      'Sujet   : ' + (subject || '(sans sujet)'),
      'Langue  : ' + clean_(p.lang, 5),
      'Date    : ' + Utilities.formatDate(new Date(), 'Africa/Casablanca', 'yyyy-MM-dd HH:mm'),
      '',
      'Pièce jointe : ' + (attachment ? attachment.getName() + ' (' + Math.round(attachment.getBytes().length / 1024) + ' Ko)' : 'aucune'),
      '',
      '--- Message ---',
      message
    ].join('\n');

    MailApp.sendEmail({
      to: need_('RECIPIENT'),
      replyTo: email,                                        // « Répondre » écrit directement au visiteur
      name: 'Portfolio ennouaim.com',
      subject: '[Portfolio] ' + (subject || 'Message de ' + name),
      body: body,
      attachments: attachment ? [attachment] : []
    });
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  } finally {
    try { if (lock.hasLock()) lock.releaseLock(); } catch (x) {}
  }
}

/** Vérifie le jeton Turnstile auprès de Cloudflare (usage unique) et le domaine d'origine. */
function verifyTurnstile_(token) {
  if (!token) return false;
  var res = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'post',
    payload: { secret: need_('TURNSTILE_SECRET'), response: String(token) },
    muteHttpExceptions: true
  });
  var v;
  try { v = JSON.parse(res.getContentText()); } catch (x) { return false; }
  if (v.success !== true) return false;
  var hosts = prop_('ALLOWED_HOSTNAMES').split(',').map(function (h) { return h.trim().toLowerCase(); }).filter(String);
  return !hosts.length || hosts.indexOf(String(v.hostname || '').toLowerCase()) !== -1;
}

/** Limites : 10 messages/heure au total et 1 message / 2 minutes par adresse. */
function allow_(email) {
  var cache = CacheService.getScriptCache();
  var hourKey = 'h' + Utilities.formatDate(new Date(), 'UTC', 'yyyyMMddHH');
  var n = Number(cache.get(hourKey) || 0);
  if (n >= LIMITS.perHour) return false;
  var mailKey = 'e' + Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, email.toLowerCase())).slice(0, 24);
  if (cache.get(mailKey)) return false;
  cache.put(hourKey, String(n + 1), 3600);
  cache.put(mailKey, '1', LIMITS.perEmailSec);
  return true;
}

/** Supprime retours à la ligne et caractères de contrôle (empêche l'injection d'en-têtes) et tronque. */
function clean_(v, max) {
  return String(v || '').replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}
function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k) || ''; }
function need_(k) { var v = prop_(k); if (!v) throw new Error('Propriété manquante : ' + k); return v; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/**
 * Valide et reconstruit la pièce jointe : extension autorisée, taille, signature réelle du fichier (magic bytes),
 * nom assaini. Retourne un Blob, ou null si quelque chose ne va pas.
 */
function fileBlob_(rawName, b64) {
  var name = String(rawName || '').replace(/[\u0000-\u001F\u007F]/g, '').split(/[\\/]/).pop();
  var dot = name.lastIndexOf('.');
  var ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
  if (!FILE_TYPES[ext]) return null;
  var stem = name.slice(0, dot).replace(/[^A-Za-z0-9 _()\-]/g, '_').slice(0, LIMITS.fileName - ext.length - 1) || 'fichier';
  var bytes;
  try { bytes = Utilities.base64Decode(String(b64)); } catch (e) { return null; }
  if (!bytes.length || bytes.length > LIMITS.fileMaxBytes) return null;
  var b = bytes.map(function (v) { return v & 255; });                 // Apps Script renvoie des octets signés
  function starts(sig) { for (var i = 0; i < sig.length; i++) { if (b[i] !== sig[i]) return false; } return true; }
  var ok = ext === 'pdf' ? starts([0x25, 0x50, 0x44, 0x46, 0x2D])
    : ext === 'png' ? starts([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
    : (ext === 'jpg' || ext === 'jpeg') ? starts([0xFF, 0xD8, 0xFF])
    : ext === 'docx' ? starts([0x50, 0x4B, 0x03, 0x04])
    : b.indexOf(0) === -1;                                              // txt : aucun octet nul
  if (!ok) return null;
  return Utilities.newBlob(bytes, FILE_TYPES[ext], stem + '.' + ext);
}
