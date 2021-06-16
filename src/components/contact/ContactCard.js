import React from 'react'
import './ContactCard.css'
function ContactCard() {
	return (
		<div className="contact-card">
			<div className="card-deck">
				<div className="card-item">
					<img src="/img/icons/address.PNG" alt="address" />
					<h3>Address</h3>
					<p>Canada</p>
				</div>
				<div className="card-item">
					<img src="/img/icons/instagram.PNG" alt="instagram" />
					<h3>Instagram</h3>
					<p>
						<a href="https://www.instagram.com/delivereh/">Deliver, Eh!</a>
					</p>
				</div>
				<div className="card-item">
					<img src="/img/icons/email.PNG" alt="email" />
					<h3>Email</h3>
					<p>info@delivereh.ca</p>
				</div>
			</div>
		</div>
	)
}

export default ContactCard
