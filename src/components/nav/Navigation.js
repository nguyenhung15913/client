import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import './Navigation.css'
import { Link, useHistory } from 'react-router-dom'
function Navigation() {
	const history = useHistory()
	const isAuthenticated = localStorage.getItem('isAuthenticated')
	const role = localStorage.getItem('role')

	const handleClick = () => {
		localStorage.removeItem('isAuthenticated')
		localStorage.removeItem('role')
		history.push('/')
	}

	const dashboard = () => {
		if (role === 'customer') {
			return <Dropdown.Item href="/customers/dashboard">Profile</Dropdown.Item>
		}
	}

	const userAuthentication = () => {
		if (isAuthenticated) {
			return (
				<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">
						<img
							className="profile-avatar"
							src="https://www.delivereh.ca/main/avatar.jpg"
							alt="profile"
						/>
					</Dropdown.Toggle>

					<Dropdown.Menu className="drop-menu">
						{dashboard()}
						<Dropdown.Item href="#/action-3">Help</Dropdown.Item>
						<Dropdown.Item onClick={handleClick}> Sign Out</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)
		}
		return (
			<>
				<Link to="/login" className="nav-link btn-style">
					Sign In
				</Link>

				<Link className="nav-link btn-style" to="/register">
					Sign Up
				</Link>
			</>
		)
	}

	return (
		<Navbar expand="lg" className="nav-bar">
			<Navbar.Brand>
				<Link to="/">
					<img
						className="brand-logo"
						src="https://delivereh.unicotaxi.com/uploads/2962a6ccd1c895fec96f5304e818dcd42f8a950f.png"
						alt="brand-logo"
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{/* <Nav.Link className="nav-link">
						<Link to="/new-home">New Home</Link>
					</Nav.Link> */}

					<Link className="nav-link" to="/">
						Home
					</Link>

					<Link className="nav-link" to="/about">
						About
					</Link>

					<Link className="nav-link" to="/contact">
						Contact
					</Link>

					<Link className="nav-link btn-style" to="/delivery-request">
						Delivery Request
					</Link>
					<Link className="nav-link btn-style" to="/login">
						Deliver Now
					</Link>
					<Link className="nav-link btn-style" to="/provider/login">
						Become a Driver
					</Link>
					<Link className="nav-link btn-style" to="/partner/login">
						Become a Business Partner
					</Link>
					{userAuthentication()}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
