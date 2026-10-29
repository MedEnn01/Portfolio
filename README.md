# Portfolio — Mohammed Ennouaim (Ingénieur en Cybersécurité)

Site statique bilingue (FR/EN), sans dépendance. Statistiques : Cloudflare Web Analytics (sans cookie) et Google Analytics 4 chargé **uniquement après consentement** (voir « Statistiques » plus bas). Formulaire de contact optionnel avec anti-robot (voir `backend/README.md`). Adresse : https://ennouaim.com/ (GitHub Pages, derrière Cloudflare — voir `GUIDE-CLOUDFLARE-ANALYTICS.md`)

## Mode brouillon (`showDrafts`)
Dans `assets/data.js`, `"showDrafts": true` affiche les brouillons, les profils vides, les scores d'exemple « (exemple) » et un bandeau orange. **Avant de publier, passe-le à `false` et remplace les exemples**, puis lance `node tools/check.js --publish` : il échoue tant qu'il reste du contenu d'exemple.

## Modifier le contenu
Tout le contenu est dans `assets/data.js` (projets, certifications, compétences, liens). Le code est dans `assets/app.js` et `assets/style.css`.
- `?preview=1` à la fin de l'adresse affiche les **brouillons et emplacements vides** (`"draft": true`). Retire `draft` pour publier un élément.
- Un lien vide (`"url": ""`) est simplement masqué.
- Après chaque modification, lance `node tools/check.js` : il vérifie la CSP, les secrets, les téléphones, les liens et les traductions.

## Publier sur GitHub Pages
1. Crée un **nouveau dépôt** (pas de vieil historique) et pousse ces fichiers.
2. **Settings > Pages > Source : Deploy from a branch** (`main`, dossier `/root`). Coche **Enforce HTTPS**.
3. **Adresse actuelle** : `https://medenn01.github.io/Portfolio/` (dépôt `Portfolio` de `MedEnn01`). Dans `backend/`, `ALLOWED_HOSTNAMES` et Turnstile doivent contenir `medenn01.github.io`.
4. **Plus tard, domaine `ennouaim.com`** (une fois acheté) :
   - ajoute un fichier `CNAME` contenant `ennouaim.com`, puis *Settings > Pages > Custom domain* et **Enforce HTTPS** ;
   - **vérifie le domaine** (*Settings > Pages > Add a domain*, enregistrement TXT `_github-pages-challenge-MedEnn01`) ;
   - DNS : 4 enregistrements **A** vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, (optionnel) 4 **AAAA** `2606:50c0:8000::153` à `2606:50c0:8003::153`, et un **CNAME** `www` vers `medenn01.github.io` ;
   - remplace `https://medenn01.github.io/Portfolio/` par `https://ennouaim.com/` dans `index.html`, `sitemap.xml`, `robots.txt`, `404.html` ; ajoute `ennouaim.com,www.ennouaim.com` à Turnstile et à `ALLOWED_HOSTNAMES` ;
   - activer le verrouillage du domaine, la double authentification, un enregistrement **CAA** (`letsencrypt.org`) et DNSSEC chez le registrar.

## Durcissement du dépôt et du compte (à faire une fois)
- **Compte** : double authentification avec **clé d'accès (passkey)** ou clé de sécurité ; évite le SMS.
- **E-mail** : *Settings > Emails* → cocher **Keep my email addresses private** et **Block command line pushes that expose my email**. Configure Git avec l'adresse `ID+MedEnn01@users.noreply.github.com` :
  `git config user.email "ID+MedEnn01@users.noreply.github.com"`.
- **Commits signés** : signature SSH (`git config gpg.format ssh`, `git config commit.gpgsign true`) puis ajoute la clé comme *Signing key*.
- **Branche `main`** : *Settings > Rules > Rulesets* → bloquer les *force push* et la suppression ; exiger que le workflow **Contrôles de sécurité** passe.
- **Code security** : activer *Secret scanning*, *Push protection*, *Dependabot alerts*, *Dependabot security updates* et *Private vulnerability reporting*.
- **Actions** : *Settings > Actions > General* → permissions du jeton en **Read only** ; autoriser seulement les actions de GitHub.
- Le workflow `.github/workflows/checks.yml` épingle les actions par empreinte (SHA) ; Dependabot propose les mises à jour.

## Statistiques
Dans `assets/data.js` → `"analytics"` :
- `"cloudflare"` : jeton Cloudflare Web Analytics (32 caractères). Sans cookie, aucune bannière.
- `"ga4"` : identifiant Google Analytics 4 (`G-XXXXXXXXXX`). Une bannière FR/EN demande l'accord du visiteur ; GA4 n'est chargé qu'après « Accepter » (Consent Mode : refus par défaut, signaux Google et publicité désactivés). Le lien « Cookies » du pied de page permet de changer d'avis (les cookies `_ga` sont alors supprimés).
Valeur vide = rien n'est chargé. Le code est dans `assets/analytics.js`.

## Formulaire de contact
Voir `backend/README.md` (Turnstile + Google Apps Script sur un Gmail dédié). Tant que `contactForm` est vide dans `assets/data.js`, le site n'appelle aucun service externe.

## Ce que la CSP protège (et ses limites)
GitHub Pages ne permet pas de définir des en-têtes HTTP. La politique de sécurité est donc dans une balise `<meta>` : elle bloque les scripts, polices et images externes, `eval` et les objets, sauf Cloudflare Turnstile et l'endpoint Apps Script du formulaire (et seulement pour eux). Elle **ne** peut **pas** définir `frame-ancestors` (anti-clickjacking) : un court script dans `app.js` masque la page si elle est chargée dans une iframe.
Si tu modifies le script inline de `index.html`, `node tools/check.js` te donne la nouvelle empreinte à mettre dans `script-src`.
`security.txt` et `robots.txt` ne sont lus qu'à la **racine d'un domaine** : sur `github.io/Portfolio/` ils sont ignorés, ils deviendront utiles avec `ennouaim.com`.

## Données personnelles
Le téléphone n'apparaît ni sur le site ni dans les CV publiés. Avec `"phoneOnRequest": true` (dans `person`, `assets/data.js`), la carte Contact affiche « Téléphone : communiqué sur demande » + un bouton **Demander** qui pré-remplit le formulaire (sujet « Demande de numéro de téléphone ») : tu réponds par email à qui tu veux. Mettre `false` pour masquer la ligne. Avant tout nouveau dépôt de CV ou de certificats, vérifie qu'ils ne contiennent ni adresse ni téléphone.
Voir `LICENSE` et `THIRD_PARTY_NOTICES.md`.
