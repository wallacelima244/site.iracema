const mobile = document.querySelector("[data-mobile]");
const openMenuBtn = document.querySelector('[data-open="menu"]');
const agendaBtns = document.querySelectorAll('[data-open="agenda"]');
const form = document.querySelector("[data-form]");

// 1) Menu mobile
if (openMenuBtn && mobile) {
  openMenuBtn.addEventListener("click", () => {
    mobile.classList.toggle("open");
  });

  mobile.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobile.classList.remove("open");
  });
}

// 2) Agenda (Calendly popup)
// Troque o link quando tiver: Calendly/Doctoralia
const AGENDA_URL = "https://calendly.com/SEU_LINK_AQUI";

function openAgenda() {
  // Se tiver Calendly, abre modal. Se não, abre em nova aba.
  if (window.Calendly && AGENDA_URL.includes("calendly.com")) {
    Calendly.initPopupWidget({ url: AGENDA_URL });
  } else {
    window.open(AGENDA_URL, "_blank");
  }
}

agendaBtns.forEach(btn => btn.addEventListener("click", openAgenda));

// 3) Formulário -> WhatsApp
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.querySelector('[name="nome"]').value.trim();
    const telefone = form.querySelector('[name="telefone"]').value.trim();
    const mensagem = form.querySelector('[name="mensagem"]').value.trim();

    const texto =
`Olá, Iracema! Vim pelo site e gostaria de falar com você.

Nome: ${nome}
Telefone: ${telefone}
Mensagem: ${mensagem}`.trim();

    const url = "https://wa.me/5511985820586?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
  });
}
