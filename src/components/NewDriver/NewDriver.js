import React from 'react'
import './NewDriver.css'
import { Link, useHistory } from 'react-router-dom'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import axios from 'axios'
function Driver() {
	const history = useHistory()
	const handleSubmit = (e) => {
		e.preventDefault()
		const {
			postal,
			name,
			email,
			street,
			city,
			region,
			password,
			password2,
			phone
		} = e.target
		const userData = {
			name: name.value,
			email: email.value,
			street: street.value,
			city: city.value,
			region: region.value,
			password: password.value,
			password2: password2.value,
			phone: phone.value,
			postal: postal.value
		}

		console.log(userData)

		axios
			.post(
				'https://delivereh-server.herokuapp.com/customers/sign-up',
				userData,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			.then((res) => {
				history.push('/login')
			})
			.catch((err) => console.error(err.response))
	}

	return (
		<div className="driver-page">
			<Navigation />
			<div className="overlay"></div>
			<div className="driver-page__body customer-registration">
				<div className="slogan-section">
					<h1>
						deliver. needs <br /> partners like you
					</h1>
					<p>
						Drive with delivereh. and earn great money as an independent
						contractor. get paid weekly just for helping the community get
						product around town. Be your own boss and get paid in fees for
						driving on your own schedule.
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<Link to="/provider/login">
						<div className="switch-link-btn">Already have an account?</div>
					</Link>
					<div className="driver__signin-form">
						<h4>Register</h4>
						<input type="text" name="name" placeholder="Full name" />
						<input type="text" name="email" placeholder="Email Address" />
						<input type="text" name="street" placeholder="Street address" />
						<input type="text" name="city" placeholder="City" />
						<input type="text" name="region" placeholder="Region" />
						<input type="text" name="phone" placeholder="Phone Number" />
						<input type="password" name="password" placeholder="Password" />
						<input
							type="password"
							name="password2"
							placeholder="Re-type Password"
						/>

						<input type="submit" value="Register" />
					</div>
				</form>
			</div>
			<Footer />
			<Copyright />
		</div>
	)
}

export default Driver
