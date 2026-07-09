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

/* 電話ボタン（お電話でのお問い合わせ）：1クリック目で発信確認ダイアログを表示し、OK時のみ発信 */
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a.btn[href^="tel:"]') : null;
    if (!link) return;
    var num = (link.textContent.match(/[0-9０-９][0-9０-９-]{6,}/) || [])[0]
      || link.getAttribute('href').replace(/^tel:/, '');
    if (!window.confirm('お電話を発信します。\n' + num + '\nよろしいですか？')) {
      e.preventDefault();
    }
  });
})();
