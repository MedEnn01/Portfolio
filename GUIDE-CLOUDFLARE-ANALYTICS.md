# Guide — Cloudflare, sécurité et statistiques (ennouaim.com)

Ordre conseillé : **A → B → C → D → E**. Durée totale ≈ 30–45 min (+ attente DNS).
Rien ne casse si tu suis l'ordre : le site reste servi par GitHub Pages, Cloudflare se place devant.

---

## A. Comptes : double authentification partout (5 min)
Le maillon faible d'un site, c'est le compte qui le contrôle. Active la 2FA (application ou clé d'accès, **pas le SMS**) sur :
- **Gmail** (`ennouaim159@gmail.com`) — c'est la clé de récupération de tous les autres comptes ;
- **GitHub** — *Settings > Password and authentication* ;
- **Namecheap** — *Profile > Security > Two-Factor Authentication* ;
- **Cloudflare** (après création du compte) — *My Profile > Authentication*.

---

## B. Cloudflare devant le site (20 min)

### B1. Ajouter le domaine
1. Crée un compte sur **dash.cloudflare.com** → *Add a domain* → `ennouaim.com` → plan **Free**.
2. Cloudflare importe tes enregistrements. **Vérifie qu'il y a exactement :**

| Type | Nom | Valeur | Proxy |
|---|---|---|---|
| A | `@` | 185.199.108.153 | 🟠 Proxied |
| A | `@` | 185.199.109.153 | 🟠 Proxied |
| A | `@` | 185.199.110.153 | 🟠 Proxied |
| A | `@` | 185.199.111.153 | 🟠 Proxied |
| AAAA | `@` | 2606:50c0:8000::153 | 🟠 Proxied |
| AAAA | `@` | 2606:50c0:8001::153 | 🟠 Proxied |
| AAAA | `@` | 2606:50c0:8002::153 | 🟠 Proxied |
| AAAA | `@` | 2606:50c0:8003::153 | 🟠 Proxied |
| CNAME | `www` | medenn01.github.io | 🟠 Proxied |

Supprime tout autre enregistrement A/CNAME (ex. redirection ou « parking » Namecheap).

### B2. Enregistrements de sécurité (DNS only, nuage gris)
| Type | Nom | Valeur | Pourquoi |
|---|---|---|---|
| CAA | `@` | `0 issue "letsencrypt.org"` | seule cette autorité (utilisée par GitHub) peut émettre un certificat |
| CAA | `@` | `0 issuewild ";"` | aucun certificat « joker » autorisé |
| CAA | `@` | `0 iodef "mailto:ennouaim159@gmail.com"` | alerte en cas de demande refusée |
| TXT | `@` | `v=spf1 -all` | le domaine n'envoie **aucun** email → personne ne peut l'usurper |
| TXT | `_dmarc` | `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s` | les faux emails « @ennouaim.com » sont rejetés |
| TXT | `*._domainkey` | `v=DKIM1; p=` | aucune clé de signature valide |

> Cloudflare ajoute automatiquement ses propres autorités dans le CAA pour son certificat : ne t'en occupe pas.
> ⚠️ Si un jour tu crées une adresse email `@ennouaim.com`, il faudra adapter SPF/DMARC/DKIM.

### B3. Basculer les serveurs DNS chez Namecheap
1. Cloudflare t'affiche **2 serveurs** du type `xxx.ns.cloudflare.com`.
2. Namecheap → *Domain List > ennouaim.com > Domain* → **Nameservers** : `Custom DNS` → colle les 2 serveurs → ✔.
3. Attends l'email « ennouaim.com is now active on Cloudflare » (souvent < 1 h, jusqu'à 24 h).

### B4. Réglages Cloudflare
**SSL/TLS**
- *Overview* : mode **Full (strict)**.
  (Si le site affiche une erreur **526**, passe temporairement en **Full**.)
- *Edge Certificates* :
  - **Always Use HTTPS** : On
  - **Automatic HTTPS Rewrites** : On
  - **Minimum TLS Version** : TLS 1.2
  - **TLS 1.3** : On
  - **HSTS** : *Enable* → Max-Age **12 months**, **Include subdomains** : On, **Preload** : Off (à activer plus tard, quand tout est stable depuis quelques semaines), **No-Sniff** : On

**DNS → Settings** : **DNSSEC** : *Enable*. Cloudflare donne un enregistrement **DS** (Key Tag, Algorithm 13, Digest Type 2, Digest).
Namecheap → *Advanced DNS* → section **DNSSEC** → *Add new DS* → colle les 4 valeurs.

**Security**
- *Bots* → **Bot Fight Mode** : On
- *Settings* → Security Level : **Medium**, Browser Integrity Check : On

**Speed / Optimization** (sinon la politique de sécurité bloque des scripts injectés)
- **Rocket Loader** : Off
- **Email Address Obfuscation** (*Scrape Shield*) : Off

### B5. En-têtes de sécurité (Rules → Transform Rules → *Modify Response Header*)
*Create rule* → nom `Security headers` → **All incoming requests** → ajoute ces en-têtes (**Set static**) :

| En-tête | Valeur |
|---|---|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'sha256-GRV1PhoZrauxMMHoVrXUkjzDMLJU+cGpPJg7U32TGqk=' https://challenges.cloudflare.com https://www.googletagmanager.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self'; connect-src 'self' https://script.google.com https://script.googleusercontent.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com; frame-src https://challenges.cloudflare.com; object-src 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; worker-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |

> Cette politique est la même que celle de `index.html`, **plus** `frame-ancestors 'none'` (anti-clickjacking, impossible en balise `<meta>`).
> ⚠️ Si tu modifies le script inline de `index.html`, `node tools/check.js` donne la nouvelle empreinte `sha256-…` : mets-la **aux deux endroits** (index.html et cette règle).

### B6. GitHub Pages
Laisse *Custom domain* = `ennouaim.com` et **Enforce HTTPS** coché.
Une fois derrière Cloudflare, GitHub peut afficher un avertissement DNS : c'est normal (il voit les adresses de Cloudflare), le site fonctionne.

---

## C. Cloudflare Web Analytics (sans cookie, 3 min)
1. Cloudflare → **Analytics & Logs > Web Analytics** → *Add a site* → `ennouaim.com`.
2. Si Cloudflare propose l'**installation automatique**, **désactive-la** (sinon double comptage et script bloqué).
3. Choisis l'option **JS snippet** et copie uniquement le **token** (32 caractères dans `"token": "…"`).
4. Dans `assets/data.js` : `"analytics": { "cloudflare": "TON_TOKEN", … }`.

## D. Google Analytics 4 (avec bannière de consentement, 5 min)
1. **analytics.google.com** → *Admin > Create > Property* → nom `ennouaim.com`, fuseau **Maroc**, devise MAD.
2. *Data streams > Web* → URL `https://ennouaim.com` → copie l'**ID de mesure** `G-XXXXXXXXXX`.
3. Dans `assets/data.js` : `"analytics": { "ga4": "G-XXXXXXXXXX", … }`.
4. Réglages recommandés (*Admin > Data collection*) : **Google signals : Off** ; *Data retention* : **14 mois**.

La bannière s'affiche automatiquement ; rien n'est envoyé à Google avant « Accepter ».

## E. Google Search Console (référencement, 5 min)
1. **search.google.com/search-console** → *Add property* → **Domain** → `ennouaim.com`.
2. Google donne un TXT `google-site-verification=…` → ajoute-le dans **Cloudflare DNS** (`@`, DNS only) → *Verify*.
3. *Sitemaps* → `https://ennouaim.com/sitemap.xml` → *Submit*.

## F. Pousser le code puis vérifier
1. `node tools/check.js --publish` → doit afficher « Tous les contrôles sont passés ».
2. Pousse sur `main`.
3. Contrôles en ligne (vise **A / A+** partout) :
   - securityheaders.com → `https://ennouaim.com`
   - developer.mozilla.org/observatory → `ennouaim.com`
   - ssllabs.com/ssltest → `ennouaim.com`
   - internet.nl → *Website* et *Email* (DNSSEC, SPF, DMARC)
