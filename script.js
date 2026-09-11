document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.nav a[href^="#"]').forEach((navLink) => {
  const section = document.querySelector(navLink.getAttribute('href'));
  if (!section) return;
  const eyebrow = section.querySelector('.section__eyebrow');
  section.addEventListener('mouseenter', () => {
    navLink.classList.add('nav--focused');
    if (eyebrow) eyebrow.classList.add('section__eyebrow--focused');
  });
  section.addEventListener('mouseleave', () => {
    navLink.classList.remove('nav--focused');
    if (eyebrow) eyebrow.classList.remove('section__eyebrow--focused');
  });
});
