import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function DriverModal({ incomingRequest }) {
	const [show, setShow] = React.useState(incomingRequest)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	React.useEffect(() => {
		setShow(incomingRequest)
	}, [incomingRequest])
	return (
		<>
			<Modal className="driver-modal" show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Incoming Request</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Woohoo, you are having a delivery from a random user
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Accept
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default DriverModal
