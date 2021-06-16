import './CustomerRegistration.css'
import Header from '../header/Header'
import { Link, useHistory } from 'react-router-dom'
import Navigation from '../nav/Navigation'
import MobileDownload from '../MobileDownload/MobileDownload'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import axios from 'axios'
import { useState } from 'react'
function CustomerRegistration() {
	const history = useHistory()
	const [errors, setErrors] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault()
		// const {
		// 	firstName,
		// 	lastName,
		// 	email,
		// 	street,
		// 	city,
		// 	region,
		// 	password,
		// 	password2,
		// 	phone,
		// 	postal
		// } = e.target
		const { firstName, lastName, email, password, password2, phone } = e.target
		const userData = {
			first_name: firstName.value,
			last_name: lastName.value,
			email: email.value,

			password: password.value,
			password2: password2.value,
			phone: phone.value
		}

		axios
			.post('https://delivereh-server.herokuapp.com/users/sign-up', userData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				console.log(res)
				history.push('/login')
			})
			.catch((err) => {
				let result = []
				err.response.data.errors.forEach((error) => result.push(error.message))
				let unique = [...new Set(result)]
				setErrors(unique)
			})
	}

	return (
		<>
			<Navigation />
			<Header />
			<div className="customer-registration register-page">
				<h1>
					Create your account and enjoy the safe convenience of delivereh.
				</h1>
				<p>
					Welcome to delivereh., the easiest way to get delivery at the tap of a
					button.
				</p>

				<form onSubmit={handleSubmit}>
					<Link to="/login">
						<div className="switch-link-btn">Already have an account?</div>
					</Link>
					{errors ? errors.map((e) => <div className="error">{e}</div>) : null}

					<input type="text" name="firstName" placeholder="First Name" />
					<input type="text" name="lastName" placeholder="Last Name" />
					<input type="email" name="email" placeholder="Email Address" />

					<input type="text" name="phone" placeholder="Phone Number" />
					<input type="password" name="password" placeholder="Password" />
					<input
						type="password"
						name="password2"
						placeholder="Re-type Password"
					/>

					<input type="submit" value="Register" />
				</form>
			</div>
			<MobileDownload />
			<Footer />
			<Copyright />
		</>
	)
}

export default CustomerRegistration
