import React from 'react'
import './ContactForm.css'
function ContactForm() {
	return (
		<form action="" className="contact-form">
			<div className="contact-information">
				<input type="text" name="name" placeholder="Your Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="text" name="phone" placeholder="Phone" />
			</div>
			<div className="contact-message">
				<textarea placeholder="Your Message Here"></textarea>
				<input type="submit" className="form-btn" value="Send" />
			</div>
		</form>
	)
}

export default ContactForm
