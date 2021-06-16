import { useState } from 'react'
import './NewPartner.css'
import Header from '../header/Header'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'
import MobileDownload from '../MobileDownload/MobileDownload'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function NewPartner() {
	const history = useHistory()
	const [errors, setErrors] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, street, city, region, password, password2, phone } =
			e.target
		const userData = {
			name: name.value,
			email: email.value,
			street: street.value,
			city: city.value,
			region: region.value,
			password: password.value,
			password2: password2.value,
			phone: parseInt(phone.value)
		}
		axios
			.post('http://localhost:3000/shippers/sign-up', userData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				history.push('/partner/login')
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
					<Link to="/partner/login">
						<div className="switch-link-btn">Already have an account?</div>
					</Link>
					{errors ? errors.map((e) => <div className="error">{e}</div>) : null}

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
				</form>
			</div>
			<MobileDownload />
			<Footer />
			<Copyright />
		</>
	)
}

export default NewPartner
