document.addEventListener('DOMContentLoaded', () => {
  const update = lang => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-es][data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active);
    });
    localStorage.setItem('samuelPortfolioLanguage', lang);
  };
  update(localStorage.getItem('samuelPortfolioLanguage') || 'en');
  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => update(btn.dataset.lang)));
  document.querySelector('#year').textContent = new Date().getFullYear();
});
