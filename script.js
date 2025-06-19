// === NAVBAR TOGGLE ===
const navToggle = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// === MODAL POPUP ===
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

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// === IMAGE SLIDER ===
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextSlide = document.getElementById("nextSlide");
const prevSlide = document.getElementById("prevSlide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Next button
nextSlide.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

// Previous button
prevSlide.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

// Auto-play every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);


// === CONTACT FORM VALIDATION ===
const form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // If all fields are valid
  alert("Thank you for your message!");
  form.reset();
});

