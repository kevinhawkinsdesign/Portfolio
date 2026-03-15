
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in, .tl-item').forEach(el => observer.observe(el));

document.querySelectorAll('.tl-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});
