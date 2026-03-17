/**
 * KEVIN HAWKINS PORTFOLIO — ANIMATIONS
 */
(function () {
  'use strict';

  /* scroll progress */
  var bar = document.createElement('div');
  bar.id = 'kh-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', function () {
    var h = document.documentElement;
    bar.style.width = Math.min((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100, 100) + '%';
  }, { passive: true });

  /* cursor glow — desktop only */
  var glow = document.createElement('div');
  glow.id = 'kh-cursor-glow';
  document.body.appendChild(glow);
  if (!window.matchMedia('(pointer: coarse)').matches) {
    var mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    (function loop() {
      gx += (mx - gx) * 0.075; gy += (my - gy) * 0.075;
      glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
      requestAnimationFrame(loop);
    })();
  } else { glow.style.display = 'none'; }

  /* nav scroll state */
  var nav = document.querySelector('nav');
  if (nav) window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* scroll reveal */
  var targets = document.querySelectorAll(
    'h1,h2,h3,.hero-label,.hero-sub,.hero-actions,' +
    'figure,figcaption,.outcome-card,.speaking-card,' +
    '.case-meta-row,.tag-list,.case-nav,' +
    '.work-card,.about-content p,.sidebar-block,' +
    '.section-header,.leadership-section'
  );
  targets.forEach(function (el) {
    if (!el.closest('nav')) el.classList.add('kh-reveal');
  });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('kh-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.kh-reveal').forEach(function (el) { obs.observe(el); });

  /* animated counters */
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-count'), 10);
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target) || target > 10000) return;
      var steps = 50, step = 0;
      var iv = setInterval(function () {
        step++;
        el.textContent = prefix + Math.round(target * step / steps) + suffix;
        if (step >= steps) { el.textContent = prefix + target + suffix; clearInterval(iv); }
      }, 1200 / steps);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.outcome-number[data-count]').forEach(function (el) { countObs.observe(el); });

  /* card tilt */
  if (!window.matchMedia('(pointer: coarse)').matches) {
    document.querySelectorAll('.work-card,.speaking-card,.outcome-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 4) + 'deg) translateY(-5px)';
        card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = ''; card.style.transition = '';
      });
    });
    /* magnetic buttons */
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        btn.style.transform = 'translate(' + ((e.clientX - r.left - r.width/2) * 0.1) + 'px,' + ((e.clientY - r.top - r.height/2) * 0.12) + 'px) translateY(-2px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }
})();

  /* ── SPEAKING TABS ── */
  document.querySelectorAll('.speaking-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-tab');
      document.querySelectorAll('.speaking-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.speaking-tab-content').forEach(function(c) { c.classList.add('hidden'); });
      tab.classList.add('active');
      var el = document.getElementById('tab-' + target);
      if (el) el.classList.remove('hidden');
    });
  });
