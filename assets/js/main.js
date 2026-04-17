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
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);
  });
})();
