/* ── KEVIN HAWKINS — HOME ── */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* nav scroll state */
  var nav = document.getElementById('nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', (window.scrollY || 0) > 30); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* set background photos (lazy via data-bg) */
  document.querySelectorAll('.bg-photo[data-bg]').forEach(function (el) {
    el.style.backgroundImage = "url('" + el.getAttribute('data-bg') + "')";
  });

  /* reveal + bg fade-in */
  var targets = document.querySelectorAll('.rise, .bg-photo');
  if ('IntersectionObserver' in window && !reduce) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { obs.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }

  /* mobile menu */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    var set = function (open) {
      document.body.classList.toggle('menu-open', open);
      toggle.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { set(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 880) set(false); });
  }
})();
