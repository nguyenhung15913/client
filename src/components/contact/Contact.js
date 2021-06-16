import React from 'react'
import ContactCard from './ContactCard'
import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
	return (
		<div className="contact">
			<ContactCard />
			<h1>Get in Touch</h1>
			<p>
				Driver, Business and Personal App on Android and IOS Your App for Local
				pick up, Local delivery, contract work and Beyond...Get in Touch
				Contacting us to make a delivery request has never been easier. At
				delivereh., you can now make delivery request online or by App
			</p>
			<ContactForm />
		</div>
	)
}

export default Contact
