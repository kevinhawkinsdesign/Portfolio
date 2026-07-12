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

  /* ── Mobile menu (built from the existing nav so it stays in sync) ── */
  if (nav) {
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span>';
    nav.appendChild(toggle);

    var menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.setAttribute('aria-hidden', 'true');

    var html = '<div class="mobile-menu-inner">';
    var links = nav.querySelector('.nav-links');
    if (links) {
      links.querySelectorAll(':scope > li').forEach(function (li) {
        var a = li.querySelector(':scope > a');
        if (!a) return;
        var act = a.classList.contains('active') ? ' active' : '';
        var tgt = a.target ? ' target="' + a.target + '" rel="noopener"' : '';
        html += '<a class="mm-link' + act + '" href="' + a.getAttribute('href') + '"' + tgt + '>' + a.textContent.trim() + '</a>';
        var dd = li.querySelector('.dropdown');
        if (dd) {
          html += '<div class="mm-sub">';
          dd.querySelectorAll('a').forEach(function (sa) {
            var sact = sa.classList.contains('active') ? ' active' : '';
            html += '<a class="mm-sublink' + sact + '" href="' + sa.getAttribute('href') + '">' + sa.textContent.trim() + '</a>';
          });
          html += '</div>';
        }
      });
    }
    var cta = nav.querySelector('.nav-cta');
    if (cta) html += '<a class="mm-cta" href="' + cta.getAttribute('href') + '">' + cta.textContent.trim() + '</a>';
    html += '</div>';
    menu.innerHTML = html;
    document.body.appendChild(menu);

    var setMenu = function (open) {
      document.body.classList.toggle('menu-open', open);
      toggle.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    };
    toggle.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setMenu(false); });
  }

  /* ── Faded background photos ── */
  var bgEls = document.querySelectorAll('.bg-photo[data-bg]');
  bgEls.forEach(function (el) { el.style.backgroundImage = "url('" + el.getAttribute('data-bg') + "')"; });
  if (bgEls.length && 'IntersectionObserver' in window && !reduce) {
    var bgObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); bgObs.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    bgEls.forEach(function (el) { bgObs.observe(el); });
  } else {
    bgEls.forEach(function (el) { el.classList.add('in'); });
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

  /* ── Image lightbox (case study figures + shot-grid galleries) ── */
  (function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('.case-main figure img, .shot-card img'));
    if (!items.length) return;

    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image viewer');
    lb.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">✕</button>' +
      (items.length > 1 ? '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>' +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">›</button>' : '') +
      '<div class="lightbox-stage">' +
        '<img class="lightbox-img" alt="">' +
        '<p class="lightbox-caption"></p>' +
        (items.length > 1 ? '<span class="lightbox-counter"></span>' : '') +
      '</div>';
    document.body.appendChild(lb);

    var imgEl = lb.querySelector('.lightbox-img');
    var capEl = lb.querySelector('.lightbox-caption');
    var countEl = lb.querySelector('.lightbox-counter');
    var closeBtn = lb.querySelector('.lightbox-close');
    var prevBtn = lb.querySelector('.lightbox-prev');
    var nextBtn = lb.querySelector('.lightbox-next');
    var idx = 0;
    var lastFocus = null;

    function captionFor(img) {
      var host = img.closest('figure, .shot-card');
      var cap = host ? host.querySelector('figcaption') : null;
      return cap ? cap.textContent.trim() : (img.alt || '');
    }

    function show(i) {
      idx = (i + items.length) % items.length;
      var img = items[idx];
      imgEl.classList.remove('show');
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt || '';
      capEl.textContent = captionFor(img);
      if (countEl) countEl.textContent = (idx + 1) + ' / ' + items.length;
      requestAnimationFrame(function () { imgEl.classList.add('show'); });
    }

    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.classList.add('open');
      document.body.classList.add('lightbox-open');
      requestAnimationFrame(function () { closeBtn.focus(); });
    }
    function close() {
      lb.classList.remove('open');
      document.body.classList.remove('lightbox-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    items.forEach(function (img, i) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Zoom image');
      img.addEventListener('click', function () { open(i); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    closeBtn.addEventListener('click', close);
    if (prevBtn) prevBtn.addEventListener('click', function () { show(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === 'Tab') {
        var focusable = Array.prototype.slice.call(lb.querySelectorAll('button')).filter(function (el) { return el.offsetParent !== null; });
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  })();

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
