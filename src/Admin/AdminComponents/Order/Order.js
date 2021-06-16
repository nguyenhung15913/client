import { useState, useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header/Header'
import { Form, Button, Table } from 'react-bootstrap'
import './Order.css'
import Moment from 'react-moment'
function Order(props) {
	const [orders, setOrders] = useState([])
	const [searchNumber, setSearchNumber] = useState('')
	const API_KEY = 'G60NRdVo0l.zUSTeuD1tz5WY8Oq8eF5'
	useEffect(() => {
		var myHeaders = new Headers()
		myHeaders.append('Authorization', `Basic ${API_KEY}`)

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		}

		fetch(`https://api.shipday.com/orders/${searchNumber}`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				if (result) {
					setOrders(result)
				} else {
					setOrders([])
				}
			})
			.catch((error) => console.log('error', error))
	}, [searchNumber])
	return (
		<div className="dashboard">
			<Sidebar />
			<div className="page-body">
				<Header />
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Enter order number</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter order number..."
							value={searchNumber}
							onChange={(e) => setSearchNumber(e.target.value)}
						/>
					</Form.Group>
					<Button className="order-button" type="submit">
						Submit
					</Button>
				</Form>
				<div className="data-table">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Date</th>
								<th>Order No.</th>
								<th>C. Name</th>
								<th>Pick-up From</th>
								<th>Amount</th>
								<th>Distance</th>
								<th>Driver ID</th>
								<th>Status </th>
								{/* <th>Order Details </th> */}
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr>
									<th>
										<Moment format="YYYY/MM/DD">
											{order.activityLog.placementTime}
										</Moment>
									</th>
									<th>{order.orderNumber}</th>
									<th>{order.customer.name}</th>
									<th>{order.restaurant.name}</th>
									<th>{order.costing.totalCost}</th>
									<th>{(order.distance * 1.609).toFixed(2)} Km</th>
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

export default Order
