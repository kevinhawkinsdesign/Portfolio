
// Reveal animations with generous rootMargin so elements trigger before fully in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fallback: make everything visible after 800ms in case observer doesn't fire
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}, 800);
