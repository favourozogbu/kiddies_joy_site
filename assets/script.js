document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Handle contact form submission
  const form = document.getElementById('contact-form');
  const responseEl = document.getElementById('form-response');
  if (form && responseEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic form validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (name === '' || email === '' || message === '') {
        responseEl.style.display = 'block';
        responseEl.style.color = '#c62828';
        responseEl.textContent = 'Please fill in all fields.';
        return;
      }
      // Show thank you message
      responseEl.style.display = 'block';
      responseEl.style.color = '#2e7d32';
      responseEl.textContent = 'Thank you for reaching out! We will get back to you shortly.';
      // Reset form fields
      form.reset();
    });
  }
});