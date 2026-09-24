import { requireCentralAccess, logout } from "./auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  const access = await requireCentralAccess();
  if (!access) return;

  const { profile, session } = access;
  const fallbackName = session?.user?.email || "Usuário";
  const name = profile?.nome || fallbackName;
  const role = profile?.perfil || "";

  const userName = document.querySelector(".user-info strong");
  const userStatus = document.querySelector(".user-info span");
  const avatar = document.querySelector(".user-avatar");

  if (userName) userName.textContent = name;
  if (userStatus) {
    userStatus.textContent =
      role === "admin" ? "Administrador" :
      role === "auditor" ? "Auditor" :
      "Usuário";
  }
  if (avatar) avatar.textContent = name.trim().charAt(0).toUpperCase();

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

  document.getElementById("logoutButton")?.addEventListener("click", logout);
});
