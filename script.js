// ===============================
// DARK / LIGHT THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
} else {
  // Default theme
  document.body.classList.add("light-theme");
  updateThemeIcon("light-theme");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
    updateThemeIcon("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");

    localStorage.setItem("theme", "dark-theme");
    updateThemeIcon("dark-theme");
  }
});

// Change button icon
function updateThemeIcon(theme) {
  if (theme === "dark-theme") {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
}