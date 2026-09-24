import { requireCentralAccess, logout } from "./auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  const access = await requireCentralAccess();
  if (!access) return;

  const { profile } = access;

  const userName = document.querySelector(".user-info strong");
  const userStatus = document.querySelector(".user-info span");
  const avatar = document.querySelector(".user-avatar");

  if (userName) userName.textContent = profile?.nome || profile?.email || "Usuário";
  if (userStatus) userStatus.textContent = profile?.perfil === "admin" ? "Administrador" : "Auditor";
  if (avatar) {
    const name = profile?.nome || profile?.email || "U";
    avatar.textContent = name.trim().charAt(0).toUpperCase();
  }

  const button = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");

  if (button && sidebar) {
    button.addEventListener("click", () => sidebar.classList.toggle("open"));
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 850) sidebar?.classList.remove("open");
    });
  });

  const logoutButton = document.getElementById("logoutButton");
  logoutButton?.addEventListener("click", logout);
});
