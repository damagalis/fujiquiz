// Mobiel menu (gedeeld door alle pagina's)
(function () {
  var m = document.querySelector('.menu'), n = document.querySelector('.navwrap nav');
  if (!m || !n) return;
  m.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    m.setAttribute('aria-expanded', o);
  });
})();
