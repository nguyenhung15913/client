import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
function Banner() {
	return (
		<div className="Banner">
			<h1 className="title">
				Book a delivery using delivereh. App in Just Two Steps
			</h1>
			<p className="subtitle">
				Get a delivery to your destination on time with fast reliable service
				from delivereh., We delivere, Eh!
			</p>
			<p className="subtitle">
				Founded To Support Businesses During The Pandemic and Beyond.
			</p>
			<button className="Banner__button">
				<Link to="/register">Sign up-it's Free!</Link>
			</button>
			<p className="font-size-md">
				Already using delivereh. ?{' '}
				<span className="Banner__sign-in">
					<Link to="/login">Sign In</Link>
				</span>
			</p>
		</div>
	)
}

export default Banner
