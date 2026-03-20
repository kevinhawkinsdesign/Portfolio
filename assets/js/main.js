/* ── KEVIN HAWKINS — MAIN JS ── */
(function() {
  'use strict';

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const ring   = document.querySelector('.cursor-ring');
  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      ring.style.left   = rx + 'px';
      ring.style.top    = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  // Nav scroll state
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Speaking tabs
  document.querySelectorAll('.speaking-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.speaking-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.speaking-tab-content').forEach(c => c.classList.add('hidden'));
      tab.classList.add('active');
      const el = document.getElementById('tab-' + tab.dataset.tab);
      if (el) el.classList.remove('hidden');
    });
  });

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(function(el) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const target = +el.dataset.count;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        let start = 0, step = target / 50;
        const tick = setInterval(() => {
          start = Math.min(start + step, target);
          el.textContent = prefix + Math.round(start) + suffix;
          if (start >= target) clearInterval(tick);
        }, 28);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });

})();
