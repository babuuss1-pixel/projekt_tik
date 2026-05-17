// ==========================
// DARK / LIGHT MODE TOGGLE
// ==========================

const btn = document.getElementById('darkModeBtn');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  if (btn) btn.textContent = '☀️';
}

if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Save preference
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      btn.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'dark');
      btn.textContent = '🌙';
    }
  });
}