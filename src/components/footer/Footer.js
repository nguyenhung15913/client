import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className="footer">
			<div className="footer__social-media">
				<img
					src="https://delivereh.unicotaxi.com/uploads/2962a6ccd1c895fec96f5304e818dcd42f8a950f.png"
					alt="brand-logo"
				/>
				<p>
					delivereh. features superior and optimal in App technologies
					supporting the resilience of business continuity.
				</p>
				<div className="footer__social-media__icons">
					<a href="https://www.facebook.com/deliivereh/">
						<FacebookIcon />
					</a>
					<a href="https://www.youtube.com/watch?v=sYbvQQOLASQ">
						<YouTubeIcon />
					</a>
					<a href="https://www.instagram.com/delivereh/">
						<InstagramIcon />
					</a>
					<a href="https://www.tiktok.com/@delivereh?">
						<TwitterIcon />
					</a>
					<a href="https://www.linkedin.com/company/delivereh/">
						<LinkedInIcon />
					</a>
					<a href="https://business.google.com/u/1/dashboard/l/16016902768667605844">
						<Icon name="google plus g" size="large" />
					</a>
				</div>
			</div>
			<div className="footer__menu">
				<h4>Menu</h4>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/delivery-request">Delivery Request</Link>
					</li>
					<li>
						<Link to="/login">Deliver Now</Link>
					</li>
					<li>
						<Link to="/provider/login">Become a Driver</Link>
					</li>
					<li>
						<Link to="/partner/login">Become a Business Partner</Link>
					</li>
				</ul>
			</div>
			<div className="footer__menu">
				<h4>Useful Links</h4>
				<ul>
					<li>
						<Link to="/">Privacy Policy</Link>
					</li>
					<li>
						<Link to="/">Terms & Conditions</Link>
					</li>
					<li>
						<Link to="/Contact">Contact us</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
