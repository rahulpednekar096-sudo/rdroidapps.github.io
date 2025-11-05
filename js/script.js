// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Drawer open/close
function toggleMenu() {
  document.getElementById("drawer").classList.toggle("open");
}

// Login popup toggle
function toggleLogin() {
  const box = document.getElementById("loginBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
