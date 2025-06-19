document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile nav menu
  const toggleMenu = document.getElementById("toggle-menu");
  const navbar = document.getElementById("navbar");

  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = toggleMenu.getAttribute("aria-expanded") === "true" || false;
    toggleMenu.setAttribute("aria-expanded", !expanded);
  });

  // Smooth scroll for nav links
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }

      // Close mobile nav
      navbar.classList.remove("active");
      toggleMenu.setAttribute("aria-expanded", false);
    });
  });

  // Highlight active nav link on scroll
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active-link");
          if (link.getAttribute("href").slice(1) === section.id) {
            link.classList.add("active-link");
          }
        });
      }
    });

    // Show/hide back-to-top button
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Contact form validation
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", e => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields before submitting.");
    }
  });

  // Back-to-top button
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "2rem";
  backToTop.style.right = "1.5rem";
  backToTop.style.padding = "0.5rem 0.75rem";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "50%";
  backToTop.style.backgroundColor = "#1ad1ff";
  backToTop.style.color = "#0d1117";
  backToTop.style.fontSize = "1.5rem";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "999";
  backToTop.style.boxShadow = "0 0 10px #1ad1ffcc";
  backToTop.style.transition = "opacity 0.3s ease";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark/Light mode toggle with persistence
  const toggleDarkMode = document.createElement("button");
  toggleDarkMode.innerHTML = "🌙";
  toggleDarkMode.setAttribute("aria-label", "Toggle dark mode");
  toggleDarkMode.style.position = "fixed";
  toggleDarkMode.style.bottom = "2rem";
  toggleDarkMode.style.left = "1.5rem";
  toggleDarkMode.style.padding = "0.5rem 0.75rem";
  toggleDarkMode.style.border = "none";
  toggleDarkMode.style.borderRadius = "50%";
  toggleDarkMode.style.backgroundColor = "#1ad1ff";
  toggleDarkMode.style.color = "#0d1117";
  toggleDarkMode.style.fontSize = "1.3rem";
  toggleDarkMode.style.cursor = "pointer";
  toggleDarkMode.style.zIndex = "999";
  toggleDarkMode.style.boxShadow = "0 0 10px #1ad1ffcc";
  document.body.appendChild(toggleDarkMode);

  // Apply saved theme
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleDarkMode.textContent = "☀️";
  }

  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleDarkMode.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});


