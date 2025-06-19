document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggleMenu = document.getElementById("toggle-menu");
  const navbar = document.getElementById("navbar");

  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Scroll animations handled by CSS fade-in classes triggered at load (for simplicity)

  // Back to top button setup
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
  backToTop.style.backgroundColor = '#ff7f50';
  backToTop.style.color = '#121212';
  backToTop.style.display = 'none';
  backToTop.style.zIndex = '1000';
  backToTop.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide back to top on scroll
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  // Dark/Light mode toggle button
  const darkToggle = document.createElement("button");
  darkToggle.setAttribute("aria-label", "Toggle Dark/Light Mode");
  darkToggle.textContent = "🌙"; // Moon icon for dark mode
  darkToggle.style.position = "fixed";
  darkToggle.style.bottom = "1rem";
  darkToggle.style.right = "1rem";
  darkToggle.style.padding = "0.5rem";
  darkToggle.style.fontSize = "1.5rem";
  darkToggle.style.border = "none";
  darkToggle.style.borderRadius = "50%";
  darkToggle.style.cursor = "pointer";
  darkToggle.style.background = "#ffa64d";
  darkToggle.style.color = "#121212";
  darkToggle.style.boxShadow = "0 0 15px #ff7f50cc";
  darkToggle.style.transition = "background-color 0.3s, color 0.3s";
  document.body.appendChild(darkToggle);

  // Load mode from localStorage
  const currentMode = localStorage.getItem("mode");
  if (currentMode === "light") {
    document.body.classList.remove("dark-mode");
    darkToggle.textContent = "☀️";
    darkToggle.style.background = "#121212";
    darkToggle.style.color = "#ffa64d";
  } else {
    document.body.classList.add("dark-mode");
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkToggle.textContent = "🌙";
      darkToggle.style.background = "#ffa64d";
      darkToggle.style.color = "#121212";
      localStorage.setItem("mode", "dark");
    } else {
      darkToggle.textContent = "☀️";
      darkToggle.style.background = "#121212";
      darkToggle.style.color = "#ffa64d";
      localStorage.setItem("mode", "light");
    }
  });

  // Smooth scroll nav links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
      if(navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    });
  });

  // Highlight active nav link on scroll
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll(".section");

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 80;
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
  });

  // Simple form validation
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

});

  });
});
