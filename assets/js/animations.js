/**
 * KEVIN HAWKINS PORTFOLIO — MICRO-ANIMATION ENGINE
 * Add before </body> on every page. No dependencies.
 */
(function () {
  'use strict';

  /* ── SCROLL PROGRESS BAR ── */
  var bar = document.createElement('div');
  bar.id = 'kh-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', function () {
    var h = document.documentElement;
    var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── CURSOR GLOW (desktop only) ── */
  var glow = document.createElement('div');
  glow.id = 'kh-cursor-glow';
  document.body.appendChild(glow);
  if (!window.matchMedia('(pointer: coarse)').matches) {
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var gx = mx, gy = my;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mouseleave', function () { glow.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { glow.style.opacity = '1'; });
    (function loop() {
      gx += (mx - gx) * 0.075; gy += (my - gy) * 0.075;
      glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
      requestAnimationFrame(loop);
    })();
  } else {
    glow.style.display = 'none';
  }

  /* ── NAV SCROLL STATE ── */
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('kh-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── SCROLL REVEAL ── */
  var targets = document.querySelectorAll(
    'h1, h2, h3, .hero-label, .hero-sub, .hero-actions, ' +
    'figure, figcaption, .outcome-card, .speaking-card, ' +
    '.case-meta-row, .tag-list, .case-nav, ' +
    '.work-card, .about-content p, .sidebar-block, ' +
    '.section-header, .work-grid, .speaking-grid, .leadership-section'
  );
  targets.forEach(function (el) {
    if (!el.closest('nav')) el.classList.add('kh-reveal');
  });

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('kh-visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.kh-reveal').forEach(function (el) { revealObs.observe(el); });

  /* ── H2 UNDERLINE GROW ── */
  var h2obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('kh-visible'); });
  }, { threshold: 0.3 });
  document.querySelectorAll('.case-section h2').forEach(function (h) { h2obs.observe(h); });

  /* ── ANIMATED COUNTERS ── */
  var countEls = document.querySelectorAll('.outcome-number[data-count]');
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-count'), 10);
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target) || target > 10000) return;
      var steps = 50, step = 0, inc = target / steps;
      var iv = setInterval(function () {
        step++;
        var cur = step >= steps ? target : Math.round(inc * step);
        el.textContent = prefix + cur + suffix;
        if (step >= steps) clearInterval(iv);
      }, 1200 / steps);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  countEls.forEach(function (el) { countObs.observe(el); });

  /* ── CARD TILT ── */
  if (!window.matchMedia('(pointer: coarse)').matches) {
    var cards = document.querySelectorAll('.work-card, .speaking-card, .outcome-card');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width  - 0.5;
        var y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateX(' + (-y * 5) + 'deg) rotateY(' + (x * 5) + 'deg) translateY(-5px)';
        card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = '';
      });
    });

    /* ── MAGNETIC CTA BUTTONS ── */
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width  / 2;
        var y = e.clientY - r.top  - r.height / 2;
        btn.style.transform = 'translate(' + (x * 0.1) + 'px,' + (y * 0.12) + 'px) translateY(-2px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

})();
