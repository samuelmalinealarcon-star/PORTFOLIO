/* Shared case-study template: page-specific details remain explicit placeholders until supplied. */
document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('samuelPortfolioLanguage')||'en';
  const update=lang=>{const t=i18n[lang]||i18n.en;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t[el.dataset.i18n]??el.innerHTML);document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t[el.dataset.i18nAria]??''));document.querySelectorAll('[data-lang]').forEach(btn=>{const on=btn.dataset.lang===lang;btn.classList.toggle('active',on);btn.setAttribute('aria-pressed',on)});localStorage.setItem('samuelPortfolioLanguage',lang)};
  update(saved);document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>update(btn.dataset.lang)));document.querySelector('#year').textContent=new Date().getFullYear();
});
