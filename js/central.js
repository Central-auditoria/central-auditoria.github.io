// Inicialização geral da Central.
document.addEventListener("DOMContentLoaded", () => {
  const sessionArea = document.getElementById("sessionArea");

  if (sessionArea && window.CentralAuth?.isConfigured()) {
    sessionArea.querySelector(".session-status").textContent = "Autenticação configurada";
  }
});
