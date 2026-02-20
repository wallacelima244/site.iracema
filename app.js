// Ano automático no rodapé
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = `© ${new Date().getFullYear()}`;
}