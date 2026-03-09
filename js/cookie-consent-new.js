// Cookie Management - LGPD Compliant
const COOKIE_NAMES = {
  CONSENT: "cookie-consent",
  ANALYTICS: "cookie-analytics",
  MARKETING: "cookie-marketing",
};

const COOKIE_DURATION = 365;

function setCookie(name, value, days = COOKIE_DURATION) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Strict`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}

function initCookieBanner() {
  const consent = getCookie(COOKIE_NAMES.CONSENT);

  if (!consent) {
    setTimeout(() => {
      const banner = document.getElementById("cookieConsent");
      if (banner) {
        banner.classList.add("show");
        banner.removeAttribute("aria-hidden");
      }
    }, 1000);
  } else {
    loadCookiePreferences();
  }
}

function acceptAllCookies() {
  setCookie(COOKIE_NAMES.CONSENT, "accepted");
  setCookie(COOKIE_NAMES.ANALYTICS, "accepted");
  setCookie(COOKIE_NAMES.MARKETING, "accepted");

  closeCookieBanner();
  loadCookiePreferences();
}

function rejectAllCookies() {
  setCookie(COOKIE_NAMES.CONSENT, "granted-essential");
  deleteCookie(COOKIE_NAMES.ANALYTICS);
  deleteCookie(COOKIE_NAMES.MARKETING);

  closeCookieBanner();
  disableAnalytics();
}

function acceptSelectedCookies() {
  const analytics = document.getElementById("cookieAnalytics").checked;
  const marketing = document.getElementById("cookieMarketing").checked;

  setCookie(COOKIE_NAMES.CONSENT, "granted-custom");

  if (analytics) {
    setCookie(COOKIE_NAMES.ANALYTICS, "accepted");
  } else {
    deleteCookie(COOKIE_NAMES.ANALYTICS);
  }

  if (marketing) {
    setCookie(COOKIE_NAMES.MARKETING, "accepted");
  } else {
    deleteCookie(COOKIE_NAMES.MARKETING);
  }

  closeCookieBanner();
  loadCookiePreferences();
}

function closeCookieBanner() {
  const banner = document.getElementById("cookieConsent");
  if (banner) {
    banner.classList.remove("show");
    banner.setAttribute("aria-hidden", "true");
  }
}

function loadCookiePreferences() {
  const analyticsConsent = getCookie(COOKIE_NAMES.ANALYTICS);

  if (analyticsConsent === "accepted") {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
}

function enableAnalytics() {
  window["ga-disable-G-SEU_ID_AQUI"] = false;
}

function disableAnalytics() {
  window["ga-disable-G-SEU_ID_AQUI"] = true;
}

window.addEventListener("load", initCookieBanner);

window.cookieManager = {
  acceptAll: acceptAllCookies,
  rejectAll: rejectAllCookies,
  savePreferences: acceptSelectedCookies,
  close: closeCookieBanner,
  getCookie: getCookie,
  setCookie: setCookie,
};
