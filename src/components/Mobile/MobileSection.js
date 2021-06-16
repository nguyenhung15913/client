import React from 'react'
import './MobileSection.css'
import { Container } from 'react-bootstrap'

function MobileSection() {
	return (
		<Container>
			<div className="mobile-section">
				<h1 className="mobile-section__title">delivereh. Mobile App</h1>
				<div className="mobile-section__information">
					<div className="mobile-section__information__content">
						<h2>Tap the app, get a delivery</h2>
						<p>
							delivereh. is the smartest way to get delivery at the tap of a
							button. One tap and the delivery comes directly to you. Load up
							your wallet and never pick up again.
						</p>
					</div>

					<img
						src="https://www.delivereh.ca/asset/img/tap.png"
						alt="mobile-tap"
					/>
				</div>
				<div className="mobile-section__information">
					<img
						src="https://www.delivereh.ca/asset/img/anywhere.png"
						alt="anywhere"
					/>
					<div className="mobile-section__information__item__content second-item">
						<h2>Ready anywhere, anytime</h2>
						<p>
							Book a delivery using delivereh. App in Just Two Steps Get a
							delivery to your destination on time with fast reliable service
							from delivereh., We deliver, Eh!
						</p>
					</div>
				</div>
				<div className="mobile-section__feature">
					<div className="mobile-section__feature__item">
						<div className="mobile-section__feature__item__icon">
							<img src="/img/icons/icon1.PNG" alt="icon1" />
						</div>
						<h3>Schedule your delivery</h3>
						<p>
							Schedule your delivery several months in advance.One less thing to
							worry about. Each category has its own price system.
						</p>
					</div>
					<div className="mobile-section__feature__item">
						<div className="mobile-section__feature__item__icon">
							<img src="/img/icons/icon2.PNG" alt="icon2" />
						</div>
						<h3>Easy to use</h3>
						<p>
							Both delivery and vehicles are geolocalized, an easy way to find
							each other. For a perfect transparency and service optimization,
							deliveries can rate the driver.
						</p>
					</div>
					<div className="mobile-section__feature__item">
						<div className="mobile-section__feature__item__icon">
							<img src="/img/icons/icon3.PNG" alt="icon3" />
						</div>
						<h3>7 days a week</h3>
						<p>
							delivereh. service is available 24/7. Where you want. When you
							want.
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default MobileSection
