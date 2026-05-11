setTimeout(() => {
  document.querySelectorAll('.hero-animate').forEach(el => {
    el.classList.add('loaded');
  });
}, 50);