document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".faq-q").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;
      item.classList.toggle("open");
    });
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const consent = document.querySelector("#consent");
    if (!(consent instanceof HTMLInputElement) || !consent.checked) {
      status.textContent = "Please provide consent before submitting.";
      return;
    }

    status.textContent =
      "Thank you. Your request has been captured. The clinic will contact you shortly.";
    form.reset();
  });
});
