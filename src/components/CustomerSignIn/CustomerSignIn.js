import { useState } from 'react'
import './CustomerSignIn.css'
import Header from '../header/Header'
import { Link, useHistory } from 'react-router-dom'
import Navigation from '../nav/Navigation'
import MobileDownload from '../MobileDownload/MobileDownload'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import axios from 'axios'

function CustomerSignIn(props) {
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
			.post('https://delivereh-server.herokuapp.com/users/login', userData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				localStorage.setItem('isAuthenticated', true)
				localStorage.setItem('role', res.data.role)
				localStorage.setItem('token', res.data.token)
				history.push('/')
			})
			.catch((err) => setError(err.response.data.message))
	}

	return (
		<>
			<Navigation />
			<Header />
			<div className="customer-registration">
				<h1>
					Create your account and enjoy the safe convenience of delivereh.
				</h1>
				<p>
					Welcome to delivereh., the easiest way to get delivery at the tap of a
					button.
				</p>

				<form onSubmit={handleSubmit}>
					<Link to="/register">
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

export default CustomerSignIn
