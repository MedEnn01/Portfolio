/* ==========================================================
   Statistiques de visite — Mohammed Ennouaim
   ----------------------------------------------------------
   Réglages dans assets/data.js → "analytics" :
     "cloudflare": jeton Cloudflare Web Analytics (sans cookie,
                   aucun consentement nécessaire)
     "ga4":        identifiant Google Analytics 4 « G-XXXXXXXXXX »
                   (cookies → chargé UNIQUEMENT après accord du
                   visiteur via la bannière)
   Laisser une valeur vide = rien n'est chargé.
   ========================================================== */
(function () {
  'use strict';
  var D = window.PORTFOLIO || {}, A = D.analytics || {};
  var root = document.documentElement;
  var KEY = 'me4-consent';            // "granted" | "denied" (choix du visiteur)
  var GA = /^G-[A-Z0-9]{4,16}$/.test(A.ga4 || '') ? A.ga4 : '';
  var CF = /^[a-f0-9]{32}$/i.test(A.cloudflare || '') ? A.cloudflare : '';

  function store(v) { try { if (v == null) localStorage.removeItem(KEY); else localStorage.setItem(KEY, v); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function lang() { return root.lang === 'en' ? 'en' : 'fr'; }
  function addScript(src, attrs) {
    var s = document.createElement('script'); s.src = src; s.async = true; s.defer = true;
    Object.keys(attrs || {}).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
  }

  /* ---- 1) Cloudflare Web Analytics : sans cookie, toujours actif ---- */
  if (CF) addScript('https://static.cloudflareinsights.com/beacon.min.js', { 'data-cf-beacon': JSON.stringify({ token: CF, spa: false }) });

  if (!GA) return;

  /* ---- 2) Google Analytics 4 : uniquement après consentement ---- */
  var loaded = false;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });

  function loadGA() {
    if (loaded) return; loaded = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', GA, { allow_google_signals: false, allow_ad_personalization_signals: false });
    addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA));
  }
  function wipeGA() {
    // supprime les cookies _ga / _ga_* posés par Google Analytics
    document.cookie.split(';').forEach(function (c) {
      var n = c.split('=')[0].trim();
      if (/^_ga(_|$)/.test(n)) {
        var host = location.hostname, parts = host.split('.');
        [host, '.' + host, '.' + parts.slice(-2).join('.')].forEach(function (d) {
          document.cookie = n + '=; Max-Age=0; path=/; domain=' + d + '; SameSite=Lax; Secure';
        });
        document.cookie = n + '=; Max-Age=0; path=/';
      }
    });
  }

  var TXT = {
    fr: { t: 'Statistiques de visite', p: 'J’utilise Google Analytics pour savoir quelles pages vous intéressent. Ces cookies ne sont déposés qu’avec votre accord, sans publicité ni revente de données. Vous pouvez changer d’avis à tout moment via le lien « Cookies » en bas de page.', ok: 'Accepter', no: 'Refuser' },
    en: { t: 'Visit statistics', p: 'I use Google Analytics to understand which pages interest you. These cookies are only set with your consent, with no advertising and no data resale. You can change your mind at any time via the “Cookies” link at the bottom of the page.', ok: 'Accept', no: 'Decline' }
  };
  var box = null;
  function hide() { if (box) { box.remove(); box = null; } }
  function show() {
    hide();
    var L = TXT[lang()];
    box = document.createElement('div');
    box.className = 'cc-banner'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-live', 'polite'); box.setAttribute('aria-labelledby', 'cc-t');
    box.innerHTML = '<div class="cc-in"><p class="cc-t" id="cc-t"></p><p class="cc-p"></p></div><div class="cc-btns"><button type="button" class="cc-no"></button><button type="button" class="cc-ok"></button></div>';
    box.querySelector('.cc-t').textContent = L.t;
    box.querySelector('.cc-p').textContent = L.p;
    box.querySelector('.cc-ok').textContent = L.ok;
    box.querySelector('.cc-no').textContent = L.no;
    box.querySelector('.cc-ok').onclick = function () { store('granted'); hide(); loadGA(); };
    box.querySelector('.cc-no').onclick = function () {
      var was = loaded; store('denied'); hide();
      if (was) { gtag('consent', 'update', { analytics_storage: 'denied' }); wipeGA(); }
    };
    document.body.appendChild(box);
  }

  // texte de la bannière à jour si le visiteur change de langue
  new MutationObserver(function () { if (box) show(); }).observe(root, { attributes: true, attributeFilter: ['lang'] });
  // lien « Cookies » du pied de page (re-rendu par app.js : délégation d'événement)
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('[data-consent-open]'); if (b) { e.preventDefault(); show(); } });

  var choice = read();
  if (choice === 'granted') loadGA();
  else if (choice !== 'denied') show();
})();
