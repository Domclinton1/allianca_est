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
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  // Verifica se o usuário já aceitou os cookies anteriormente
  if (!localStorage.getItem("cookiesAceitos")) {
    // Pequeno delay para aparecer após o site carregar
    setTimeout(() => {
      cookieBanner.classList.add("active");
    }, 2000);
  }

  // Função para clicar no botão
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAceitos", "true");
    cookieBanner.classList.remove("active");
  });
});
