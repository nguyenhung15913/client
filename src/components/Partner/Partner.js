import { useState } from 'react'
import './Partner.css'
import Header from '../header/Header'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import MobileDownload from '../MobileDownload/MobileDownload'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function Partner() {
	const [error, setError] = useState(null)
	const history = useHistory()
	const handleSubmit = (e) => {
		const { email, password } = e.target

		const userData = {
			email: email.value,
			password: password.value
		}

		e.preventDefault()
		axios
			.post('http://localhost:3000/shippers/login', userData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				localStorage.setItem('isAuthenticated', true)
				localStorage.setItem('role', res.data.role)
				history.push('/')
			})
			.catch((err) => setError(err.response.data.message))
	}

	return (
		<>
			<Navigation />
			<Header />
			<div className="partner">
				<h1>Become a Business Partner</h1>
				<p>
					We founded delivereh. to support businesses during the Pandemic and
					beyond. Our free to the business, secure Canadian on-demand delivery
					solution, will save your business cost; while speeding up the shipping
					cycle. End to End digital logistics solution for retail, consumer, and
					food - LOCAL distribution for the last mile Shop Local businesses
				</p>
			</div>

			<div className="customer-registration">
				<form onSubmit={handleSubmit}>
					<Link to="/partner/register">
						<div className="switch-link-btn">Create new Account</div>
					</Link>
					{error ? <div className="error">{error}</div> : null}
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
				</form>
				<a
					href="https://www.delivereh.ca/password/reset"
					className="forgot-password-link"
				>
					Forgot Password ?
				</a>
			</div>
			<MobileDownload />
			<Footer />
			<Copyright />
		</>
	)
}

export default Partner
