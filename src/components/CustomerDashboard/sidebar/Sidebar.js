import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
	return (
		<ProSidebar>
			<MenuItem className="avatar">
				<img src="https://www.delivereh.ca/main/avatar.jpg" alt="logo" />
			</MenuItem>
			<p className="customer-name">Hi, {}</p>
			<Menu iconShape="square">
				<MenuItem>
					Home Page
					<Link to="/" />
				</MenuItem>
				<SubMenu title="Orders">
					<MenuItem>
						Current Orders
						<Link to="/admin/orders" />
					</MenuItem>
					<MenuItem>
						Search past Orders
						<Link to="/admin/order-search" />
					</MenuItem>
				</SubMenu>
				<SubMenu title="Ratings & Reviews">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Wallet">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="History">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Notification">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>

				<MenuItem>
					Sign Out
					<Link to="/" />
				</MenuItem>
			</Menu>
		</ProSidebar>
	)
}

export default Sidebar
