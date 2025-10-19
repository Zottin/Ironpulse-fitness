// Navbar scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hero image slider
const heroImages = [
  'images/hero.jpg',
  'images/treadmill.jpg',
  'images/bike.jpg'
];
const heroImg = document.querySelector('.hero img');
let index = 0;

setInterval(() => {
  index = (index + 1) % heroImages.length;
  heroImg.src = heroImages[index];
}, 4000);

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting IronPulse! We will respond soon.');
  contactForm.reset();
});


// Only apply smooth scroll for in-page sections (like IDs)
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href.startsWith('#')) { // only for anchors on the same page
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

