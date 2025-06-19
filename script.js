document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile navigation
  const toggleMenu = document.getElementById("toggle-menu");
  const navbar = document.getElementById("navbar");
  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Scroll-triggered animations
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Dark/Light mode toggle button
  const darkToggle = document.createElement("button");
  darkToggle.textContent = "🌙"; // Moon icon for dark mode
  darkToggle.setAttribute("aria-label", "Toggle Dark/Light Mode");
  darkToggle.style.position = "fixed";
  darkToggle.style.bottom = "1rem";
  darkToggle.style.right = "1rem";
  darkToggle.style.padding = "0.5rem";
  darkToggle.style.fontSize = "1.5rem";
  darkToggle.style.border = "none";
  darkToggle.style.borderRadius = "50%";
  darkToggle.style.cursor = "pointer";
  darkToggle.style.background = "#eee";
  darkToggle.style.transition = "background-color 0.3s";
  document.body.appendChild(darkToggle);

  // Load saved mode from localStorage if any
  if (localStorage.getItem("mode") === "light") {
    document.body.classList.remove("dark-mode");
    darkToggle.textContent = "☀️";
  } else {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "🌙";
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkToggle.textContent = "🌙";
      localStorage.setItem("mode", "dark");
    } else {
      darkToggle.textContent = "☀️";
      localStorage.setItem("mode", "light");
    }
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      // Close nav on mobile after click
      if(navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    });
  });

  // Highlight active nav link on scroll
  const navLinks = document.querySelectorAll('nav ul li a');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 70;
    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href').slice(1) === section.id) {
            link.classList.add('active-link');
          }
        });
      }
    });

    // Show/hide back-to-top button
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // Back to top button
  const backToTop = document.createElement('button');
  backToTop.textContent = '↑';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.position = 'fixed';
  backToTop.style.right = '1rem';
  backToTop.style.bottom = '4rem';
  backToTop.style.padding = '0.5rem 0.7rem';
  backToTop.style.fontSize = '1.5rem';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '4px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.backgroundColor = '#006d77';
  backToTop.style.color = '#fff';
  backToTop.style.display = 'none';
  backToTop.style.zIndex = '1000';
  backToTop.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields.");
    }
  });
});


