// === Toggle Navigation Menu ===
const navToggle = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// === Modal Functionality ===
const modal = document.getElementById("modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalClose = document.getElementById("modal-close");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// === Slider Functionality ===
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("nextSlide");
const prev = document.getElementById("prevSlide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

next.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

prev.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);

// === Form Validation ===
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully! 🚀");
  form.reset();
});

// === Helper Function for Email Validation ===
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}




