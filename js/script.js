// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-SEU_ID_AQUI");

// Intersection Observer para animações
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};

const myObserver = new IntersectionObserver(observerCallback);

document
  .querySelectorAll(".hidden")
  .forEach((element) => myObserver.observe(element));

// Form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    let isValid = true;

    if (!name.value.trim()) {
      isValid = false;
      name.classList.add("error");
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      isValid = false;
      email.classList.add("error");
    }

    if (!message.value.trim()) {
      isValid = false;
      message.classList.add("error");
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
}
