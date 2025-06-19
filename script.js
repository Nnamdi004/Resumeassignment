// Handle toggling of the mobile menu
document.getElementById('toggle-menu').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('active');
});

// Form validation to ensure no empty fields
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});
