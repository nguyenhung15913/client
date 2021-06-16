import React from 'react'
import Header from './components/header/Header'
import Welcome from './components/Welcome/Welcome'
import MobileDownload from './components/MobileDownload/MobileDownload'
import Navigation from './components/nav/Navigation'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'

function About() {
	return (
		<div>
			<Navigation />
			<Header />
			<Welcome />
			<MobileDownload />
			<Footer />
			<Copyright />
		</div>
	)
}

export default About
