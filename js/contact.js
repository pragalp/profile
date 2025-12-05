// contact.js
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendButton = document.getElementById('send-button');

if (!contactForm) {
  console.error('contact-form not found in DOM');
} else {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendEmail();
  });
}

function setStatus(text, type = '') {
  contactMessage.textContent = text;
  contactMessage.className = 'contact-message' + (type ? ` ${type}` : '');
}

// Use sendForm (simpler) or use send() with templateParams. Below uses sendForm so it automatically reads form fields.
function sendEmail() {
  // Disable button to prevent multiple submits
  sendButton.disabled = true;
  sendButton.textContent = 'Sending...';

  // Replace with your actual service ID and template ID
  const SERVICE_ID = 'service_zlaejj5';
  const TEMPLATE_ID = 'template_13too8j';
  const PUBLIC_KEY = 'ebnziiJkiOu7-iK4G'; // same key you used in emailjs.init()

  // If you want to use sendForm (reads from the <form> by id)
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-form', PUBLIC_KEY)
    .then(function (response) {
      setStatus('✅ Message sent successfully!', 'show success');
      contactForm.reset();
    }, function (error) {
      console.error('EmailJS error:', error);
      setStatus('❌ Message not sent (service error)', 'show error');
    })
    .finally(() => {
      // re-enable and restore button text after a short delay
      setTimeout(() => {
        sendButton.disabled = false;
        sendButton.textContent = 'Send Message';
        // hide status after 5s
        setTimeout(() => {
          contactMessage.textContent = '';
          contactMessage.className = 'contact-message';
        }, 5000);
      }, 500);
    });
}
