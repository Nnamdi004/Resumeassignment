document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("toggle-menu");
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll("#navbar a");

  // Mobile toggle
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
  });

  // Highlight current section link on scroll
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(section => {
      if (section.offsetTop - 100 <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        links.forEach(link => link.classList.remove("active-link"));
        const activeLink = document.querySelector(`#navbar a[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add("active-link");
      }
    });
  });

  // Simple form validation
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you for your message!");
      form.reset();
    });
  }
});



