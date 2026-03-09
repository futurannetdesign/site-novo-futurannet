// Advanced Form Validator with LGPD Compliance
class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    this.form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => this.validateField(field));
      field.addEventListener("input", () => this.validateField(field));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const name = field.name;

    let isValid = true;
    let errorMessage = "";

    if (!value) {
      isValid = false;
      errorMessage = "Este campo é obrigatório";
    } else {
      if (name === "email") {
        if (!this.isValidEmail(value)) {
          isValid = false;
          errorMessage = "Email inválido";
        }
      } else if (name === "phone") {
        if (value && !this.isValidPhone(value)) {
          isValid = false;
          errorMessage = "Telefone deve ter 11 dígitos";
        }
      } else if (name === "message") {
        if (value.length < 10) {
          isValid = false;
          errorMessage = "Mensagem deve ter no mínimo 10 caracteres";
        }
      }
    }

    this.setFieldState(field, isValid, errorMessage);
    return isValid;
  }

  setFieldState(field, isValid, errorMessage) {
    const fieldGroup = field.closest("div") || field.parentElement;

    if (isValid) {
      field.classList.remove("error");
      field.classList.add("success");

      const existingError = fieldGroup.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }
    } else {
      field.classList.remove("success");
      field.classList.add("error");

      let errorEl = fieldGroup.querySelector(".error-message");
      if (!errorEl) {
        errorEl = document.createElement("small");
        errorEl.className = "error-message";
        fieldGroup.appendChild(errorEl);
      }
      errorEl.textContent = errorMessage;
    }
  }

  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  isValidPhone(phone) {
    const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$|^\d{10,11}$/;
    return regex.test(phone.replace(/\D/g, ""));
  }

  handleSubmit(e) {
    const fields = this.form.querySelectorAll(
      'input[type="text"], input[type="email"], textarea',
    );
    let isFormValid = true;

    // Honeypot check
    const honeypot = this.form.querySelector('input[name="url"]');
    if (honeypot && honeypot.value) {
      e.preventDefault();
      console.warn("Bot detected");
      return;
    }

    fields.forEach((field) => {
      if (!this.validateField(field)) {
        isFormValid = false;
      }
    });

    // LGPD Consent Check
    const lgpdCheckbox = this.form.querySelector('input[name="lgpd-consent"]');
    if (lgpdCheckbox && !lgpdCheckbox.checked) {
      isFormValid = false;
      alert("Você deve aceitar a Política de Privacidade para continuar");
    }

    if (!isFormValid) {
      e.preventDefault();
      alert("Por favor, corrija os erros no formulário");
    }
  }
}

window.addEventListener("load", () => {
  new FormValidator("form");
});
