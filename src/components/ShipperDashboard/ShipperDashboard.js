import React from 'react'
import Sidebar from './sidebar/Sidebar'
import './ShipperDashboard.css'
function ShipperDashboard() {
	return (
		<div className="customer-dashboard">
			<Sidebar />
			<div className="dashboard-body">
				<h1>Welcome back {}</h1>
			</div>
		</div>
	)
}

export default ShipperDashboard
