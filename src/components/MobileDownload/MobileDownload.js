import React from 'react'
import './MobileDownload.css'

function MobileDownload() {
	return (
		<div className="mobile-download">
			<h1>delivereh. Driver & delivereh. App on Android and IOS</h1>
			<p>Your App for deliveries during the pandemic and beyond...</p>
			<div className="mobile-download__link">
				<div>
					<a href="https://www.delivereh.ca/">
						<img
							src="https://www.delivereh.ca/asset/theme/images/googleplay.png"
							alt="google-play"
						/>
					</a>
				</div>
				<div>
					<a href="https://www.delivereh.ca/">
						<img
							src="https://www.delivereh.ca/asset/theme/images/appstore.png"
							alt="google-play"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default MobileDownload
