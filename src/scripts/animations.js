setTimeout(() => {
  document.querySelectorAll('.hero-animate').forEach(el => {
    el.classList.add('loaded');
  });
}, 50);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('loaded');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => {
  observer.observe(el);
});

const title = document.querySelector('#main-title');
const text = title.textContent;
title.textContent = '';

let i = 0;
const interval = setInterval(() => {
  title.textContent += text[i];
  i++;
  if (i >= text.length) clearInterval(interval);
}, 40);