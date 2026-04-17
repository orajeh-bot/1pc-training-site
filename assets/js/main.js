(function () {
  'use strict';

  function toggleLang() {
    var html = document.documentElement;
    var next = html.lang === 'ar' ? 'en' : 'ar';
    html.lang = next;
    html.dir = next === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('lang', next);
    } catch (e) {}
  }

  // Restore last choice on load (falls back to HTML default = ar)
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'ar' || saved === 'en') {
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
    }
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    var header = document.querySelector('.site-header');
    var navBtn = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');

    function closeNav() {
      if (!header) return;
      header.classList.remove('nav-open');
      if (navBtn) navBtn.setAttribute('aria-expanded', 'false');
    }

    if (navBtn && header) {
      navBtn.addEventListener('click', function () {
        var open = header.classList.toggle('nav-open');
        navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    if (nav) {
      nav.addEventListener('click', function (e) {
        if (e.target.closest('.nav-link')) closeNav();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  });
})();
