import { useEffect, useRef } from 'react'
import Footer from '../footer/Footer'
import './DriverDashboard.css'
import mapboxgl from 'mapbox-gl'
import DriverModal from '../DriverModal/DriverModal'
import axios from 'axios'
import useState from 'react-usestateref'
mapboxgl.accessToken =
	'pk.eyJ1IjoiZGVsaXZlcmVoIiwiYSI6ImNrcG9rNGw3dzI3eDAyeHJycjA0eTlvY3MifQ.zBAKnE_sbDszICoqvsqSOg'

function DriverDashboard({ role }) {
	const [requests, setRequests, requestsRef] = useState([])
	const [incomingRequest, setIncomingRequest, incomingRequestRef] =
		useState(false)
	const mapContainer = useRef(null)
	const map = useRef(null)
	const [lng, setLng, lngRef] = useState(-70.9)
	const [lat, setLat, latRef] = useState(43.35)
	const [zoom, setZoom, zoomRef] = useState(9)

	//setinterval call the api every 3s. If there is a response(status is searching), setState of incoming request to true
	const newRequest = () => {
		return axios
			.get(
				`https://delivereh-server.herokuapp.com/user_requests/incoming-request`
			)
			.then((data) => data.data.result)
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		if (map.current) return // initialize map only once

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom
		})
	})
	useEffect(() => {
		setInterval(() => {
			console.log('Looking for request')
			newRequest()
				.then((response) => {
					setRequests(response)
					if (requestsRef.current.length !== 0) {
						console.log(requestsRef.current)
						setIncomingRequest(true)
						console.log(incomingRequestRef.current)
					}
				})
				.catch((error) => console.log(error))
		}, 3000)
	}, [requestsRef, setRequests, incomingRequestRef, setIncomingRequest])
	return (
		<div className="driver-dashboard">
			<DriverModal incomingRequest={incomingRequestRef.current} />
			<div className="driver-dashboard__body">
				<div ref={mapContainer} className="map-container" />
			</div>

			<Footer />
		</div>
	)
}

export default DriverDashboard
