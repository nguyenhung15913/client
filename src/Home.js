import React from 'react'
import Banner from './components/banner/Banner'
import MobileSection from './components/Mobile/MobileSection'
import MobileDownload from './components/MobileDownload/MobileDownload'
import Navigation from './components/nav/Navigation'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'
function Home() {
	return (
		<div>
			<Navigation />
			<Banner />
			<MobileSection />
			<MobileDownload />
			<Footer />
			<Copyright />
		</div>
	)
}

export default Home
