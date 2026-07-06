/* ── KEVIN HAWKINS — MAIN JS ── */
(function () {
  'use strict';

  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Custom cursor (fine pointers only) ── */
  var cursor = document.querySelector('.cursor');
  var ring = document.querySelector('.cursor-ring');
  if (cursor && ring && fine && !reduce) {
    var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mouseleave', function () { cursor.style.opacity = ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { cursor.style.opacity = ring.style.opacity = '1'; });
    (function loop() {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      cursor.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
  } else if (cursor && ring) {
    cursor.style.display = ring.style.display = 'none';
  }

  /* ── Nav scroll state ── */
  var nav = document.getElementById('nav');

  /* ── Scroll progress bar ── */
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Magnetic elements ── */
  if (fine && !reduce) {
    document.querySelectorAll('.nav-cta, [data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.28;
        var y = (e.clientY - r.top - r.height / 2) * 0.28;
        el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window && !reduce) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Speaking tabs ── */
  document.querySelectorAll('.speaking-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.speaking-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.speaking-tab-content').forEach(function (c) { c.classList.add('hidden'); });
      tab.classList.add('active');
      var el = document.getElementById('tab-' + tab.dataset.tab);
      if (el) el.classList.remove('hidden');
    });
  });

  /* ── Counter animation ── */
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var target = +el.dataset.count;
        var prefix = el.dataset.prefix || '';
        var suffix = el.dataset.suffix || '';
        var start = 0, step = target / 50;
        var tick = setInterval(function () {
          start = Math.min(start + step, target);
          el.textContent = prefix + Math.round(start) + suffix;
          if (start >= target) clearInterval(tick);
        }, 28);
        o.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    o.observe(el);
  });

})();
