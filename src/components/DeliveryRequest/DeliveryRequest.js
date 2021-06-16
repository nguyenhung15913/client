import React from 'react'
import DeliveryRequestHeader from './DeliveryRequestHeader'
import './DeliveryRequest.css'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
function DeliveryRequest() {
	return (
		<div>
			<Navigation />
			<DeliveryRequestHeader />
			<div className="delivery-img">
				<img
					src="https://www.delivereh.ca/asset/theme/images/banner/delivereh1.webp"
					alt="delivery"
				/>
			</div>
			<Footer />
			<Copyright />
		</div>
	)
}

export default DeliveryRequest
