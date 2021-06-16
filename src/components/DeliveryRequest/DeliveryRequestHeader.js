import React from 'react'
import './DeliveryRequestHeader.css'

function DeliveryRequestHeader() {
	return (
		<div className="request-header">
			<h1>Delivery Request</h1>

			<div className="header-line"></div>

			<a
				href="https://dispatch.shipday.com/RestaurantOrderForm2/1IfdGc3Udu"
				className="request-button"
			>
				<button>Submit Delivery Request Here</button>
			</a>
		</div>
	)
}

export default DeliveryRequestHeader
