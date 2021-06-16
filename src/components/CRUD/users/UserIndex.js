import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
function UserIndex() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		return fetch('http://localhost:4000/users/')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data)
			})
			.catch((error) => console.log(error))
	}, [])

	if (!users) {
		return <div>Loading users...</div>
	}

	if (users.length === 0) {
		return <div>No users found</div>
	}

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr>
							<td>{user.id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default UserIndex
