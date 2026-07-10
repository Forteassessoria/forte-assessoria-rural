// TROQUE APENAS O NÚMERO ABAIXO.
// Use o formato 55 + DDD + número, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5569993635348";

const defaultMessage = "Olá! Vim pelo site da Forte Assessoria Rural e gostaria de mais informações.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
});

document.querySelectorAll(".whatsapp-text").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener";
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "Olá! Vim pelo site da Forte Assessoria Rural.",
    "",
    `Nome: ${name}`,
    `Telefone: ${phone}`,
    `Assunto: ${subject}`,
    `Mensagem: ${message}`
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
