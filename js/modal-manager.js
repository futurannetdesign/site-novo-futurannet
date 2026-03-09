// Modal Manager System
const ModalManager = {
  currentModals: new Set(),

  open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("show");
    modal.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden";

    this.currentModals.add(modalId);
    this.trapFocus(modal);
  },

  close(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    this.currentModals.delete(modalId);

    if (this.currentModals.size === 0) {
      document.body.style.overflow = "";
    }
  },

  trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });

    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close(modal.id);
      }
    });

    firstElement.focus();
  },

  openProjectModal(title, imageSrc, description, projectLink) {
    const modal = document.getElementById("projectModal");
    if (modal) {
      document.getElementById("projectTitle").textContent = title;
      document.getElementById("projectImage").src = imageSrc;
      document.getElementById("projectDescription").textContent = description;
      document.getElementById("projectLink").href = projectLink;
      this.open("projectModal");
    }
  },
};

function openModal(modalId) {
  ModalManager.open(modalId);
}

function closeModal(modalId) {
  ModalManager.close(modalId);
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", function () {
    const modal = this.closest(".modal");
    if (modal && modal.id) {
      closeModal(modal.id);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal && modal.id) {
        closeModal(modal.id);
      }
    });
  });
});
