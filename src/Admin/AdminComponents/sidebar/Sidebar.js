import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
	return (
		<ProSidebar>
			<MenuItem className="logo">
				<img
					src="https://delivereh.unicotaxi.com/uploads/2962a6ccd1c895fec96f5304e818dcd42f8a950f.png"
					alt="logo"
				/>
			</MenuItem>
			<p>ADMIN DASHBOARD</p>
			<Menu iconShape="square">
				<MenuItem>
					Dashboard
					<Link to="/admin/dashboard" />
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
				<SubMenu title="Members">
					<MenuItem>Personal</MenuItem>
					<MenuItem>
						Drivers
						<Link to="/admin/drivers" />
					</MenuItem>
					<MenuItem>Corporate Panel</MenuItem>
					<MenuItem>Dispatcher Panel</MenuItem>
					<MenuItem>Company Panel</MenuItem>
					<MenuItem>Account Manager</MenuItem>
					<MenuItem>Small Business</MenuItem>
				</SubMenu>
				<SubMenu title="Reports">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Ratings & Reviews">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Wallet Manager">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="History">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Notification">
					<MenuItem>Submenu</MenuItem>
				</SubMenu>
				<SubMenu title="Service Type & Fare">
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
