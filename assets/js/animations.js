/**
 * KEVIN HAWKINS PORTFOLIO — MICRO-ANIMATION ENGINE
 * Drop-in script. Add before </body> on every page.
 * No dependencies.
 */

(function() {
  'use strict';

  /* ── 1. SCROLL-TRIGGERED REVEAL ────────────────────────── */
  function initReveal() {
    // Tag all meaningful elements with .reveal
    const selectors = [
      'h1', 'h2', 'h3',
      'p', 'blockquote',
      'figure', 'img:not(nav img)',
      'section', 'article',
      '.card', '.case-card',
      '.outcomes-grid > div',
      '.stat', '.metric',
      '.tag', '.pill',
      '[class*="tool"]',
      '[class*="meta"]',
      'ul li', 'ol li',
      'figcaption',
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach((el, i) => {
      if (!el.closest('nav') && !el.closest('header nav')) {
        el.classList.add('reveal');
        // Stagger siblings
        const parent = el.parentElement;
        const siblings = [...parent.children].filter(c => c.classList.contains('reveal'));
        const idx = siblings.indexOf(el);
        if (idx > 0 && idx < 5) {
          el.classList.add(`reveal-delay-${idx}`);
        }
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ── 2. CURSOR GLOW ─────────────────────────────────────── */
  function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let raf;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      glow.style.opacity = '1';
    });

    function animate() {
      // Lerp for smooth follow
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top  = glowY + 'px';
      raf = requestAnimationFrame(animate);
    }
    animate();
  }

  /* ── 3. NAV SCROLL STATE ────────────────────────────────── */
  function initNavScroll() {
    const nav = document.querySelector('nav, header nav, .nav');
    if (!nav) return;

    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastY = y;
    }, { passive: true });
  }

  /* ── 4. GRADIENT ORBS PARALLAX ──────────────────────────── */
  function initOrbParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      document.body.style.setProperty('--orb-offset', `${y * 0.15}px`);
    }, { passive: true });
  }

  /* ── 5. ANIMATED STAT COUNTERS ──────────────────────────── */
  function initCounters() {
    const stats = document.querySelectorAll('.outcomes-grid > div, .stat-box, [class*="outcome"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const numEl = el.querySelector('h3, strong, .number, [class*="stat-num"]');
        if (!numEl) return;

        const text = numEl.textContent.trim();
        const match = text.match(/^([+\-€]?)([\d,]+)(%?)(.*)$/);
        if (!match) return;

        const prefix  = match[1] || '';
        const rawNum  = parseInt(match[2].replace(/,/g, ''), 10);
        const suffix  = match[3] || '';
        const extra   = match[4] || '';
        const duration = 1400;
        const steps    = 60;
        const inc      = rawNum / steps;
        let current    = 0;
        let step       = 0;

        const interval = setInterval(() => {
          step++;
          current = Math.min(rawNum, Math.round(inc * step));
          const display = current >= 1000
            ? current.toLocaleString()
            : current.toString();
          numEl.textContent = prefix + display + suffix + extra;

          if (step >= steps) {
            clearInterval(interval);
            numEl.textContent = text; // restore exact original
          }
        }, duration / steps);

        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    stats.forEach(el => observer.observe(el));
  }

  /* ── 6. MAGNETIC HOVER ON CTA BUTTONS ───────────────────── */
  function initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const btns = document.querySelectorAll('a[href*="mailto"], .btn-cta, a.cta, nav a[href*="mailto"]');

    btns.forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top  - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px) translateY(-2px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ── 7. GRADIENT TILT ON CARDS ───────────────────────────── */
  function initCardTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('a[href*="case-"], .card, .case-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top)  / rect.height;
        const rotX = (y - 0.5) * -6;
        const rotY = (x - 0.5) *  6;
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        card.style.transition = 'none';

        // Dynamic gradient spotlight
        card.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%,
          rgba(108,92,231,0.08) 0%,
          rgba(253,121,168,0.05) 40%,
          transparent 70%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.background = '';
        card.style.transition = '';
      });
    });
  }

  /* ── 8. HERO HEADLINE GRADIENT TEXT SPLIT ───────────────── */
  function initHeroGradientText() {
    // Find the first h1 on the page
    const h1 = document.querySelector('h1');
    if (!h1) return;

    // If it has an <em> or <i>, the CSS handles it.
    // If not, wrap the last word in a gradient span.
    if (!h1.querySelector('em, i, .gradient-text')) {
      const words = h1.innerHTML.split(' ');
      if (words.length > 1) {
        const last = words.pop();
        h1.innerHTML = words.join(' ') + ' <em>' + last + '</em>';
      }
    }
  }

  /* ── 9. SECTION HEADING REVEAL ANIMATION ────────────────── */
  function initHeadingReveal() {
    const h2s = document.querySelectorAll('h2');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    h2s.forEach(h => observer.observe(h));
  }

  /* ── 10. AMBIENT SECTION GRADIENT BLOBS ─────────────────── */
  function injectSectionBlobs() {
    const sections = document.querySelectorAll('section, article > *:nth-child(3n)');

    const colors = [
      ['rgba(108,92,231,0.07)', 'rgba(253,121,168,0.05)'],
      ['rgba(0,206,201,0.07)',  'rgba(162,155,254,0.05)'],
      ['rgba(253,203,110,0.07)','rgba(253,121,168,0.05)'],
    ];

    sections.forEach((section, i) => {
      const [c1, c2] = colors[i % colors.length];
      const blob = document.createElement('div');
      blob.style.cssText = `
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, ${c1} 0%, ${c2} 50%, transparent 70%);
        filter: blur(80px);
        pointer-events: none;
        z-index: 0;
        top: 50%;
        ${i % 2 === 0 ? 'right: -100px' : 'left: -100px'};
        transform: translateY(-50%);
        animation: orbFloat ${16 + i * 4}s ease-in-out infinite;
      `;

      if (getComputedStyle(section).position === 'static') {
        section.style.position = 'relative';
      }
      section.appendChild(blob);
      section.style.overflow = 'hidden';
    });
  }

  /* ── 11. SCROLL PROGRESS BAR ─────────────────────────────── */
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #6c5ce7, #fd79a8, #00cec9);
      z-index: 10000;
      transition: width 0.1s linear;
      pointer-events: none;
    `;
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ── 12. LINK HOVER SHIMMER ENHANCEMENT ─────────────────── */
  function initLinkEffects() {
    // Add subtle entrance animation to nav links
    const navLinks = document.querySelectorAll('nav a, .nav a');
    navLinks.forEach((link, i) => {
      link.style.animationDelay = `${0.05 * i}s`;
      link.style.animation = `fadeIn 0.6s ease both`;
    });
  }

  /* ── INIT ALL ──────────────────────────────────────────────*/
  function init() {
    initNavScroll();
    initScrollProgress();
    initCursorGlow();
    initReveal();
    initHeroGradientText();
    initHeadingReveal();
    initCounters();
    initCardTilt();
    initMagneticButtons();
    initLinkEffects();
    // Slightly delayed for layout stability
    setTimeout(injectSectionBlobs, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
