const toggle = document.getElementById('theme-toggle');
const bulb = document.getElementById('bulb-face');

// System preference or saved one
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  bulb.src = isDark ? 'light-sleep.png' : 'light-awake.png';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply theme on load
if (savedTheme) {
  setTheme(savedTheme === 'dark');
  toggle.checked = savedTheme === 'dark';
} else {
  setTheme(prefersDark);
  toggle.checked = prefersDark;
}

// Toggle handler
toggle.addEventListener('change', () => {
  setTheme(toggle.checked);
});
