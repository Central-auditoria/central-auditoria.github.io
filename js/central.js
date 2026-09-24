document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");

  if (button && sidebar) {
    button.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 850) {
        sidebar?.classList.remove("open");
      }
    });
  });
});
