import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header/Header'

import './Dashboard.css'
function Dashboard() {
	return (
		<div className="dashboard">
			<Sidebar />
			<div className="page-body">
				<Header />
				<img
					src="/img/icons/dashboard.PNG"
					alt="dashboard"
					className="dashboard-img"
				/>
			</div>
		</div>
	)
}

export default Dashboard
