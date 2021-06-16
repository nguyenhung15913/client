import { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header/Header'
import { Table } from 'react-bootstrap'
import Moment from 'react-moment'

function CurrentOrders() {
	const [currentOrders, setCurrentOrders] = useState([])
	const API_KEY = 'G60NRdVo0l.zUSTeuD1tz5WY8Oq8eF5'
	useEffect(() => {
		var myHeaders = new Headers()
		myHeaders.append('Authorization', `Basic ${API_KEY}`)

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		}

		fetch('https://api.shipday.com/orders', requestOptions)
			.then((response) => response.json())
			.then((result) => setCurrentOrders(result))
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
								<th>Order No.</th>
								<th>C. Name</th>
								<th>Pick-up From</th>
								<th>Amount</th>
								<th>Distance</th>
								<th>Placement Time</th>
								<th>Driver ID</th>
								<th>Status </th>
								{/* <th>Order Details </th> */}
							</tr>
						</thead>
						<tbody>
							{currentOrders.map((order) => (
								<tr>
									<th>{order.orderId}</th>
									<th>{order.customer.name}</th>
									<th>{order.restaurant.name}</th>
									<th>{order.costing.totalCost}</th>
									<th>{(order.distance * 1.609).toFixed(2)} Km</th>
									<th>
										<Moment format="hh:mm:ss">
											{order.activityLog.placementTime}
										</Moment>
									</th>
									<th>{order.assignedCarrierId}</th>
									<th>{order.orderStatus.orderState}</th>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	)
}

export default CurrentOrders
