import React from 'react'
import './Header.css'
import { Dropdown } from 'react-bootstrap'
function Header() {
	return (
		<div className="admin-header">
			<ul>
				<li>Dispatcher Panel</li>
				<li>Deliver List</li>
			</ul>
			<ul className="account-setting">
				<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">
						<img src="https://www.delivereh.ca/main/avatar.jpg" alt="profile" />
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Help</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</ul>
		</div>
	)
}

export default Header
