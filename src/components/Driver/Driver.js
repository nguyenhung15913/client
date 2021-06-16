import React from 'react'
import './Driver.css'
import { Link, useHistory } from 'react-router-dom'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import axios from 'axios'

function Driver() {
	const history = useHistory()
	const handleSubmit = (e) => {
		const { email, password } = e.target

		const userData = {
			email: email.value,
			password: password.value
		}

		e.preventDefault()
		axios
			.post('https://delivereh-server.herokuapp.com/drivers/login', userData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				localStorage.setItem('isAuthenticated', true)
				history.push('/')
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
					<Link to="/provider/register">
						<div className="switch-link-btn">Create new Account</div>
					</Link>
					<div className="driver__signin-form">
						<h4>Login</h4>
						<input type="text" name="email" placeholder="Email Address" />
						<input type="password" name="password" placeholder="Password" />
						<div>
							<input
								type="checkbox"
								id="remember-password"
								name="remember-password"
								value="remember-password"
							/>
							<label for="remember-password">Remember Password</label>
						</div>
						<input type="submit" value="Sign in" />
						<p className="forgot-password-link">
							<a href="https://www.delivereh.ca/provider/password/reset">
								Forgot Password ?
							</a>
						</p>
					</div>
				</form>
			</div>
			<Footer />
			<Copyright />
		</div>
	)
}

export default Driver
