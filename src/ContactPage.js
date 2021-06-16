import React from 'react'
import Contact from './components/contact/Contact'
import MobileDownload from './components/MobileDownload/MobileDownload'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'
function ContactPage() {
	return (
		<div>
			<Navigation />
			<Header />
			<Contact />
			<MobileDownload />
			<Footer />
			<Copyright />
		</div>
	)
}

export default ContactPage
