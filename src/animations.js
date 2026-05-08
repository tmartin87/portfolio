const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.animate').forEach(el => observer.observe(el))