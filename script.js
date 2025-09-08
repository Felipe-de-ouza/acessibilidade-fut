// Controle de acessibilidade
let fontSize = 16;
const body = document.body;

// Botão de expandir/ocultar opções
const toggleBtn = document.getElementById("toggle-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");

toggleBtn.addEventListener("click", () => {
  opcoes.classList.toggle("show");
});

// Aumentar fonte
document.getElementById("aumentar-fonte").addEventListener("click", () => {
  fontSize += 2;
  body.style.fontSize = fontSize + "px";
});

// Diminuir fonte
document.getElementById("diminuir-fonte").addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 2;
    body.style.fontSize = fontSize + "px";
  }
});

// Alternar tema escuro
const btnEscuro = document.getElementById("modo-escuro");
btnEscuro.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  btnEscuro.textContent = body.classList.contains("dark-mode")
    ? "☀️ Claro"
    : "🌙 Escuro";
});

// Navegação por teclado com setas
const secoes = document.querySelectorAll("section");
let index = 0;

document.addEventListener("keydown", (e) => {
  if (["ArrowDown", "ArrowRight"].includes(e.key)) {
    index = (index + 1) % secoes.length;
    secoes[index].scrollIntoView({ behavior: "smooth" });
    secoes[index].focus();
  } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
    index = (index - 1 + secoes.length) % secoes.length;
    secoes[index].scrollIntoView({ behavior: "smooth" });
    secoes[index].focus();
  }
});
