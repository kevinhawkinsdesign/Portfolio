/* Small delights: microinteractions and a few easter eggs.
   Everything here is optional polish. Each feature checks for its own
   markup, respects prefers-reduced-motion, and stays keyboard friendly. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EMAIL = 'hello@kevinhawkinsdesign.com';

  /* ---------- toast ---------- */
  var toastEl, toastTimer;
  function toast(msg, ms) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'kh-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 3200);
  }

  /* ---------- logo star: one spin and a fact per click ---------- */
  var facts = [
    '70+ countries visited, and still hungry.',
    'Started out as a front-end engineer, then moved into design.',
    'Trained in behavioral psychology. Ask about defaults.',
    'Hosts supper clubs in Barcelona with rising chefs.',
    'DC born, Barcelona based.',
    'Scaled a design org to 100+ people across 25 markets.'
  ];
  var factIdx = Math.floor(Math.random() * facts.length), clicks = 0;
  document.querySelectorAll('.nav-logo .star').forEach(function (star) {
    star.setAttribute('role', 'button');
    star.setAttribute('tabindex', '0');
    star.setAttribute('aria-label', 'Tell me something about Kevin');
    function fire(e) {
      e.preventDefault(); e.stopPropagation();
      if (!reduce) { star.classList.remove('spin'); void star.offsetWidth; star.classList.add('spin'); }
      factIdx = (factIdx + 1) % facts.length;
      clicks++;
      if (clicks === facts.length + 1) {
        document.documentElement.classList.add('supper-club');
        toast('You have heard every fact. Welcome to the supper club. Dinner is at nine.', 4200);
      } else {
        toast(facts[factIdx]);
      }
    }
    star.addEventListener('click', fire);
    star.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') fire(e); });
  });

  /* ---------- email links also copy the address ---------- */
  document.querySelectorAll('a[href^="mailto:' + EMAIL + '"]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(function () {
        toast('Copied ' + EMAIL + '. Talk soon.');
      }).catch(function () {});
    });
  });

  /* ---------- cities: local time on hover or focus ---------- */
  document.querySelectorAll('[data-tz]').forEach(function (c) {
    c.setAttribute('tabindex', '0');
    function upd() {
      try {
        var t = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: c.dataset.tz });
        c.setAttribute('data-time', t + ' there now');
      } catch (e) {}
    }
    c.addEventListener('mouseenter', upd);
    c.addEventListener('focus', upd);
    upd();
  });

  /* ---------- numbers count up once when they arrive ---------- */
  var nums = document.querySelectorAll('.stat .n');
  if (nums.length && 'IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, txt = el.textContent.trim();
        var m = txt.match(/^(\d+)(.*)$/); if (!m) return;
        var end = parseInt(m[1], 10), suf = m[2], t0 = null, dur = 900;
        el.style.minWidth = el.offsetWidth + 'px';
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * e) + suf;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- easter egg: the konami code opens the supper club ---------- */
  var seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'], pos = 0;
  var typed = '';
  document.addEventListener('keydown', function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    if (/input|textarea|select/i.test(tag)) return;
    var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = (k === seq[pos]) ? pos + 1 : (k === seq[0] ? 1 : 0);
    if (pos === seq.length) {
      pos = 0;
      var on = document.documentElement.classList.toggle('supper-club');
      toast(on ? 'Welcome to the supper club. Dinner is at nine. (Konami again to leave.)' : 'Lights back on.', 4200);
    }
    if (e.key.length === 1) {
      typed = (typed + k).slice(-8);
      if (/hola$/.test(typed)) toast('Hola desde Barcelona.');
      if (/hello$/.test(typed)) toast('Hello yourself. ' + EMAIL + ' is open.');
    }
  });

  /* ---------- for the people who open dev tools ---------- */
  try {
    console.log('%cHi, fellow builder.', 'font: 600 16px/1.4 system-ui; color: #FF5A1F');
    console.log('I started out as a front-end engineer, so I like it here too.\nTry the Konami code, or click the star in the header.\n' + EMAIL);
  } catch (e) {}
})();
