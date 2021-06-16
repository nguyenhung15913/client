import { useState } from 'react'
import './CustomerOrder.css'
import axios from 'axios'

function CustomerOrder() {
	const [submitStatus, setSubmitStatus] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		const target = e.target
		console.log(target.order_number.value)
		const {
			order_number,
			customer_name,
			customer_phone,
			customer_address,
			receiver_name,
			receiver_phone,
			receiver_address,
			instruction
		} = target

		const order = {
			order_number: order_number.value,
			customer_name: customer_name.value,
			customer_phone: customer_phone.value,
			customer_address: customer_address.value,
			receiver_name: receiver_name.value,
			receiver_phone: receiver_phone.value,
			receiver_address: receiver_address.value,
			instruction: instruction.value
		}

		axios
			.post('http://localhost:3000/order/store', order, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				setSubmitStatus(true)
			})
			.catch((err) => console.err)
	}

	const orderSubmitted = () => {
		if (submitStatus) {
			return (
				<div>
					<h4>Order Submitted. Thank you!!</h4>
				</div>
			)
		}
		return null
	}

	return (
		<div className="customer-registration">
			<form onSubmit={handleSubmit}>
				<div className="driver__signin-form">
					<h2>
						Welcome to delivereh. Enter your information and we will handle the
						rest
					</h2>
					<h3>Pick-up from:</h3>
					<input type="text" name="order_number" placeholder="order_number" />
					<input type="text" name="customer_name" placeholder="customer_name" />
					<input
						type="text"
						name="customer_phone"
						placeholder="customer_phone"
					/>
					<input
						type="text"
						name="customer_address"
						placeholder="customer_address"
					/>
					<h3>Delivery to:</h3>
					<input type="text" name="receiver_name" placeholder="receiver_name" />
					<input
						type="text"
						name="receiver_phone"
						placeholder="receiver_phone"
					/>
					<input
						type="text"
						name="receiver_address"
						placeholder="receiver_address"
					/>
					<input type="text" name="instruction" placeholder="instruction" />
					<input type="submit" value="Submit order" />
				</div>
			</form>
			{orderSubmitted()}
		</div>
	)
}

export default CustomerOrder
