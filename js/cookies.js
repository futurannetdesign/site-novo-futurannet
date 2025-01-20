// Gerenciamento de Cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function acceptCookies() {
  setCookie("cookie-consent", "accepted", 365);
  document.getElementById("cookieConsent").style.transform = "translateY(100%)";

  // Ativar Google Analytics após aceite
  enableGoogleAnalytics();
}

function declineCookies() {
  setCookie("cookie-consent", "declined", 365);
  document.getElementById("cookieConsent").style.transform = "translateY(100%)";

  // Desativar Google Analytics
  disableGoogleAnalytics();
}

// Verificar consentimento ao carregar a página
window.addEventListener("load", function () {
  const consent = getCookie("cookie-consent");
  if (!consent) {
    setTimeout(() => {
      document.getElementById("cookieConsent").classList.add("show");
    }, 1000);
  } else if (consent === "accepted") {
    enableGoogleAnalytics();
  }
});

// Funções para Google Analytics
function enableGoogleAnalytics() {
  window["ga-disable-" + "G-SEU_ID_AQUI"] = false;
}

function disableGoogleAnalytics() {
  window["ga-disable-" + "G-SEU_ID_AQUI"] = true;
}
