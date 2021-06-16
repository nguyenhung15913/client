import { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'

function DeliverehDrivers() {
	const [drivers, setDrivers] = useState([])
	const API_KEY = 'G60NRdVo0l.zUSTeuD1tz5WY8Oq8eF5'
	useEffect(() => {
		var myHeaders = new Headers()
		myHeaders.append('Authorization', `Basic ${API_KEY}`)

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		}
		fetch('https://api.shipday.com/carriers', requestOptions)
			.then((response) => response.json())
			.then((result) => setDrivers(result))
			.catch((error) => console.log('error', error))
	}, [])

	return (
		<div className="dashboard">
			<Sidebar />
			<div className="page-body">
				<Header />
				<div className="data-table">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Personal ID</th>
								<th>Name</th>
								<th>Code Name</th>
								<th>Phone Number</th>
								<th>Company ID</th>
								<th>Area ID</th>
								<th>On Shift</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{drivers.map((driver) => (
								<tr>
									<th>{driver.id}</th>
									<th>{driver.personalId ? driver.personalId : 'N/A'}</th>
									<th>{driver.name}</th>
									<th>{driver.codeName ? driver.codeName : 'N/A'}</th>
									<th>{driver.phoneNumber}</th>
									<th>{driver.companyId}</th>
									<th>{driver.areaId}</th>
									<th>{driver.isOnShift ? 'Online' : 'Offline'}</th>
									<th>{driver.email}</th>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	)
}

export default DeliverehDrivers
