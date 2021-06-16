import React from 'react'
import './NewNavigation.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import { Dropdown } from 'semantic-ui-react'

function NewNavigation() {
	const trigger = (
		<span>
			<AccountCircleIcon style={{ fontSize: [50], color: '#ca4249' }} />
		</span>
	)

	const options = [
		{
			disabled: true
		},
		{ key: 'profile', text: 'Your Profile' },
		{ key: 'help', text: 'Help' },
		{ key: 'settings', text: 'Settings' },
		{ key: 'sign-out', text: 'Sign Out' }
	]
	return (
		<div className="new-navigation">
			<div className="new-navigation-img">
				<img src="/img/icons/logo-icon.PNG" alt="logo" />
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">For Business</Link>
				</li>
				<li>
					<Link to="/">For Drivers</Link>
				</li>
				<li>
					<Link to="/">Delivery Request</Link>
				</li>
				<li>
					<Link to="/">Our partners</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
			</ul>
			<div className="user-area">
				<Dropdown
					className="user-area-dropdown"
					trigger={trigger}
					options={options}
				/>

				<ShoppingBasketIcon style={{ fontSize: [50], color: '#ca4249' }} />
			</div>
		</div>
	)
}

export default NewNavigation
