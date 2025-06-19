document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggle-menu");
  const navbar = document.getElementById("navbar");

  // Toggle mobile nav menu
  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = toggleMenu.getAttribute("aria-expanded") === "true";
    toggleMenu.setAttribute("aria-expanded", (!expanded).toString());
  });

  // Smooth scroll on nav link click
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 60,
          behavior: "smooth"
        });
        // Close mobile nav after clicking
        navbar.classList.remove("active");
        toggleMenu.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Highlight active nav link based on scroll position
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let pos = window.scrollY + 100;
    sections.forEach(section => {
      if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active-link");
          if (link.getAttribute("href").slice(1) === section.id) {
            link.classList.add("active-link");
          }
        });
      }
    });

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

  // Back-to-top button creation and behavior
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.setAttribute("aria-label", "Back to top");
  Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "2rem",
    right: "1.5rem",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#1ad1ff",
    color: "#0d1117",
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
    boxShadow: "0 0 10px #1ad1ffcc",
    transition: "opacity 0.3s ease"
  });
  document.body.appendChild(backToTop);
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

