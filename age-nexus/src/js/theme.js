(function() {
  const toggle = document.getElementById('theme-toggle');
  const footerLabel = document.getElementById('footer-theme-label');
  const stored = localStorage.getItem('age-nexus-theme');
  if (stored) document.body.className = stored;
  footerLabel.textContent = document.body.classList.contains('theme-light') ? 'claro' : 'oscuro';

  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');
    const current = document.body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark';
    localStorage.setItem('age-nexus-theme', current);
    footerLabel.textContent = current === 'theme-light' ? 'claro' : 'oscuro';
  });
})();
