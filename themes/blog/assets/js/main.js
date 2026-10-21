// One event handler, one saved preference. Page rendering works without JavaScript.
(function () {
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var button = document.getElementById('theme-toggle');
    if (button) button.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  function init() {
    applyTheme(document.documentElement.dataset.theme || 'light');
    var button = document.getElementById('theme-toggle');
    if (!button) return;
    button.addEventListener('click', function () {
      var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (_) {}
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
