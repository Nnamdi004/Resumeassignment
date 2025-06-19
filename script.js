// Wait until DOM is loaded
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

  // Dark mode toggle button
  const darkToggle = document.createElement("button");
  darkToggle.textContent = "🌙";
  darkToggle.setAttribute("aria-label", "Toggle Dark Mode");
  darkToggle.style.position = "fixed";
  darkToggle.style.bottom = "1rem";
  darkToggle.style.right = "1rem";
  darkToggle.style.padding = "0.5rem";
  darkToggle.style.fontSize = "1.5rem";
  darkToggle.style.border = "none";
  darkToggle.style.borderRadius = "50%";
  darkToggle.style.cursor = "pointer";
  darkToggle.style.background = "#eee";
  document.body.appendChild(darkToggle);

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
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

