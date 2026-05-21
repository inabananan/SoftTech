(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.global-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      document.body.classList.remove('nav-open');
    }
  });
})();
