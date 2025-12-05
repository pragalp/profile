 function sendemail(){

	var email=document.getElementById("email").value;
	var from_name=document.getElementById("name").value;
	var message=document.getElementById("message").value;

	var templateParams = {
        email: email,
        from_name: from_name,
		message: message
      };

    emailjs.sendForm('service_zlaejj5', 'template_13too8j', '', 'ebnziiJkiOu7-iK4G')
        .then(() => {
            contactMessage.textContent = '✅ Message sent successfully!';
            contactMessage.className = 'contact-message show success';

            setTimeout(() => {
                contactMessage.className = 'contact-message';
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        }, () => {
            contactMessage.textContent = '❌ Message not sent (service error)';
            contactMessage.className = 'contact-message show error';

            setTimeout(() => {
                contactMessage.className = 'contact-message';
                contactMessage.textContent = '';
            }, 5000);
        });


    }
