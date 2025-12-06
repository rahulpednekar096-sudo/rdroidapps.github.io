
// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Drawer open/close
function toggleMenu() {
  const drawer = document.getElementById("drawer");
  drawer.classList.toggle("open");
}

// Login popup toggle
function toggleLogin() {
  const box = document.getElementById("loginBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// --------------------
// THEME SWITCHER
// --------------------
function toggleTheme() {
  document.body.classList.toggle("light-theme");

  // Save preference
  const mode = document.body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", mode);

  // Update icon
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.querySelector(".theme-btn");
  if (!btn) return;

  if (document.body.classList.contains("light-theme")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

// On page load, apply saved theme
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-theme");
  }

  updateThemeIcon();
});

// Close menu & login popup when clicking outside
document.addEventListener("click", function(e) {
  const drawer = document.getElementById("drawer");
  const loginBox = document.getElementById("loginBox");

  const menuBtn = document.querySelector(".menu-btn");
  const loginBtn = document.querySelector(".login-btn");

  // 1) Close drawer if click is outside drawer + not menu button
  if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
    drawer.classList.remove("open");
  }

  // 2) Close login box if click is outside loginBox + not login button
  if (!loginBox.contains(e.target) && !loginBtn.contains(e.target)) {
    loginBox.style.display = "none";
  }
});

function openPreview(src) {
  document.getElementById("imgPreviewOverlay").style.display = "flex";
  document.getElementById("imgPreviewBox").src = src;
}

function closePreview() {
  document.getElementById("imgPreviewOverlay").style.display = "none";
}



