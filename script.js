async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("header-component", "/components/header.html").then(() =>
  initHeader(),
);

loadComponent("footer-component", "/components/footer.html");

function initHeader() {
  let lastScroll = 0;

  const header = document.getElementById("header");
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menu-overlay");

  // ======================
  // SCROLL HEADER
  // ======================

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });

  // ======================
  // ABRIR MENU
  // ======================

  toggleBtn.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("active");
  });

  // ======================
  // FECHAR AO CLICAR FORA
  // ======================

  overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("active");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!cookieBanner || !acceptBtn) return;

  if (!localStorage.getItem("cookiesAceitos")) {
    setTimeout(() => {
      cookieBanner.classList.add("active");
    }, 1500);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAceitos", "true");

    cookieBanner.classList.remove("active");

    // segurança extra pra mobile
    setTimeout(() => {
      cookieBanner.style.display = "none";
    }, 500);
  });
});
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroWhatsApp = "5531997003750"; // WhatsApp da empresa (sem espaços)

    const texto = `
Olá, gostaria de mais informações!

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}
`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
