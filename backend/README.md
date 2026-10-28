# Formulaire de contact sécurisé (anti-robot + envoi vers ta boîte mail)

## Pourquoi pas un « vrai SMTP » directement dans le site ?
Un site statique (GitHub Pages) s'exécute dans le navigateur du visiteur : il ne peut pas ouvrir de connexion SMTP, et y mettre le mot de passe du Gmail le **donnerait à tout le monde**. La solution : un petit **relais** qui envoie le mail à la place du site.
Ici, le relais est un script **Google Apps Script** rattaché à ton **Gmail dédié** : il envoie par Gmail **sans aucun mot de passe** dans le code.

```
Visiteur ──(Turnstile : « je ne suis pas un robot »)──> ton site
site ──POST──> script.google.com (Apps Script du Gmail dédié) ──vérifie le jeton chez Cloudflare──> envoie le mail ──> ta boîte
```
Protections : jeton Turnstile à usage unique et contrôle du domaine, champ-piège invisible, délai minimal de remplissage, 10 messages/heure et 1 message/2 min par adresse, validation des champs, nettoyage anti-injection d'en-têtes. Aucun secret dans le dépôt.

## Mise en place (≈ 20 minutes)

### 1. Gmail dédié
Crée une adresse Gmail uniquement pour cet usage (ex. `portfolio.ennouaim@gmail.com`), active la **validation en 2 étapes** (clé d'accès) et ne l'utilise nulle part ailleurs.

### 2. Cloudflare Turnstile (gratuit, sans pistage publicitaire)
1. Compte sur https://dash.cloudflare.com → **Turnstile** → **Add widget**.
2. Hostnames : `medenn01.github.io` (adresse actuelle) puis, plus tard, `ennouaim.com` et `www.ennouaim.com` (ajoute `localhost` seulement pour tester).
3. Mode **Managed**. Note la **clé de site** (`0x4AAAA…`, publique) et la **clé secrète** (privée : ne la mets jamais dans le site ni sur GitHub).

### 3. Le script Apps Script
1. Connecté avec le **Gmail dédié** : https://script.google.com → **Nouveau projet**.
2. Remplace le contenu de `Code.gs` par `backend/google-apps-script/Code.gs`.
3. **Paramètres du projet** (roue dentée) → coche *Afficher le fichier manifeste « appsscript.json »* → colle `appsscript.json` à la place.
4. **Paramètres du projet > Propriétés du script > Ajouter** :
   | Propriété | Valeur |
   |---|---|
   | `TURNSTILE_SECRET` | la clé secrète Turnstile |
   | `RECIPIENT` | ton adresse de réception (ex. `ennouaim159@gmail.com`) |
   | `ALLOWED_HOSTNAMES` | `medenn01.github.io` (puis `medenn01.github.io,ennouaim.com,www.ennouaim.com` quand le domaine sera actif) |
5. **Déployer > Nouveau déploiement > Application Web** : *Exécuter en tant que* **Moi** · *Qui a accès* **Tout le monde**. Autorise les permissions (écran « application non validée » : *Paramètres avancés > Accéder au projet* — normal pour ton propre script).
6. Copie l'URL qui finit par `/exec`.

### 4. Brancher le site
Dans `assets/data.js`, en haut :
```js
"contactForm": {
  "endpoint": "https://script.google.com/macros/s/XXXXXXXX/exec",
  "siteKey": "0x4AAAAxxxxxxxxxxxx"
},
```
Lance `node tools/check.js` (il refuse une clé ou une adresse mal formée), puis publie. Tant que ces deux valeurs sont vides, le formulaire reste le simple « ouvre ma messagerie » (mailto).

### 5. Tester
1. Envoie un message depuis le site → il arrive sur `RECIPIENT` avec le préfixe **[Portfolio]**, et « Répondre » écrit au visiteur.
2. Dans la boîte de réception, crée un **filtre** « Ne jamais envoyer dans le spam » pour l'adresse du Gmail dédié.
3. Dans Apps Script : **Exécutions** affiche les erreurs éventuelles.

## Pièce jointe (zone de dépôt)
Le visiteur peut joindre **un fichier** (PDF, PNG, JPG, TXT ou DOCX, **2 Mo max**). Le serveur le revalide : extension autorisée, **signature réelle du fichier** (un `.exe` renommé en `.pdf` est refusé), taille, nom assaini. Les `.docm`, `.zip`, `.js`, `.exe`, etc. sont refusés. Gmail analyse aussi les pièces jointes ; n'ouvre quand même jamais un fichier d'un inconnu sans précaution.
Fais un test réel avec un PDF d'environ 2 Mo : si Google refuse la requête, baisse `fileMaxBytes` (Code.gs) et `MAXB` (assets/app.js).

## Case « je ne suis pas un robot »
Elle reprend le thème du site (clair/sombre). Cloudflare Turnstile ne se charge qu'au **clic sur la case** et n'affiche un défi que s'il le juge nécessaire. Sans clés (`contactForm` vide), la case est une simple démo visible uniquement en mode brouillon.

## Exploitation
- **Mettre à jour le script** : Déployer > *Gérer les déploiements* > ✏️ > *Nouvelle version* (l'URL ne change pas).
- **Quota** : environ 100 e-mails/jour pour un Gmail gratuit, largement suffisant (le script en accepte déjà 10/h).
- **Abus** : change `TURNSTILE_SECRET` (nouvelle clé dans Cloudflare) ou supprime le déploiement ; l'ancienne URL cesse alors de fonctionner.
- **Confidentialité** : le message transite par Google (Apps Script/Gmail) ; Cloudflare reçoit les infos du test anti-robot. Le site ne charge Turnstile **qu'au moment où le visiteur commence à écrire**.

## Besoin d'un vrai serveur SMTP ?
Si tu préfères héberger toi-même (ton VPS), il faut un petit service (Node.js + Nodemailer) qui reçoit le même POST et se connecte à `smtp.gmail.com:465` avec un **mot de passe d'application** stocké en variable d'environnement. Le site n'aurait qu'à changer `endpoint`. Demande-le si tu en as besoin.
