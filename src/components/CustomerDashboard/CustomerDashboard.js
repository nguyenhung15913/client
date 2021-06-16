import { useRef, useEffect } from 'react'
import useState from 'react-usestateref'
import Sidebar from './sidebar/Sidebar'
import './CustomerDashboard.css'
import { Redirect } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { getDistance } from 'geolib'

mapboxgl.accessToken =
	'pk.eyJ1IjoiZGVsaXZlcmVoIiwiYSI6ImNrcG9rNGw3dzI3eDAyeHJycjA0eTlvY3MifQ.zBAKnE_sbDszICoqvsqSOg'

function CustomerDashboard({ role }) {
	const token = localStorage.getItem('token')
	const [userId, setUserId, userIdRef] = useState(0)
	const [bookingId, setBookingId, bookingIdRef] = useState('')
	const mapContainer = useRef(null)
	const map = useRef(null)
	const [lng, setLng, lngRef] = useState(-70.9)
	const [lat, setLat, latRef] = useState(43.35)
	const [zoom, setZoom, zoomRef] = useState(9)
	const [sourceLocation, setSourceLocation, sourceLocationRef] = useState([])
	const [destinationLocation, setDestinationLocation, destinationLocationRef] =
		useState([])
	const [sourceAddress, setSourceAddress, sourceAddressRef] = useState('')
	const [destinationAddress, setDestinationAddress, destinationAddressRef] =
		useState('')
	const [distance, setDistance, distanceRef] = useState('')
	const [mapKey, setMapKey, mapKeyRef] = useState('')

	useEffect(() => {
		if (map.current) return // initialize map only once

		var directions = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			unit: 'metric',
			profile: 'mapbox/cycling',
			controls: {
				profileSwitcher: false,
				instructions: false
			}
		})

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom
		})

		map.current.addControl(directions, 'top-left')
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		var directions = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			unit: 'metric',
			profile: 'mapbox/driving',
			controls: {
				profileSwitcher: false,
				instructions: false
			}
		})
		const s_addresses = directions.getOrigin()
		const d_addresses = directions.getDestination()
		setSourceLocation(s_addresses.geometry.coordinates)
		setDestinationLocation(d_addresses.geometry.coordinates)

		const sourceCoord = sourceLocationRef.current.join(',')
		const destinationCoord = destinationLocationRef.current.join(',')

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${sourceCoord}.json?access_token=pk.eyJ1IjoiZGVsaXZlcmVoIiwiYSI6ImNrcG9rNGw3dzI3eDAyeHJycjA0eTlvY3MifQ.zBAKnE_sbDszICoqvsqSOg`
		)
			.then((res) => res.json())
			.then((data) => {
				setSourceAddress(data.features[0].place_name)
			})
			.catch((err) => console.log(err))

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${destinationCoord}.json?access_token=pk.eyJ1IjoiZGVsaXZlcmVoIiwiYSI6ImNrcG9rNGw3dzI3eDAyeHJycjA0eTlvY3MifQ.zBAKnE_sbDszICoqvsqSOg`
		)
			.then((res) => res.json())
			.then((data) => setDestinationAddress(data.features[0].place_name))
			.catch((err) => console.log(err))

		const decoded = jwt_decode(token)
		setUserId(decoded.userId)
		setBookingId('ON' + Math.random().toString().substr(2, 6))

		fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${sourceCoord};${destinationCoord}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}
		`)
			.then((res) => res.json())
			.then((data) => {
				let result = data.routes[0].distance
				result /= 1000
				setDistance(result.toFixed(2))
				setMapKey(data.uuid)
			})
			.catch((err) => console.log(err))
		const {
			booking_id,
			user_id,
			distance,
			s_address,
			s_latitude,
			s_longitude,
			d_address,
			d_latitude,
			d_longitude,
			route_key
		} = e.target
		var timestamp = Date.now()
		var date = new Date(timestamp)

		let now =
			date.getFullYear() +
			'-' +
			(date.getMonth() + 1 < 10
				? '0' + (date.getMonth() + 1)
				: date.getMonth() + 1) +
			'-' +
			(date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
			' ' +
			date.getHours() +
			':' +
			date.getMinutes() +
			':' +
			date.getSeconds()
		const request = {
			booking_id: booking_id.value,
			user_id: user_id.value,
			distance: distance.value,
			s_address: s_address.value,
			s_latitude: s_latitude.value,
			s_longitude: s_longitude.value,
			d_address: d_address.value,
			d_latitude: d_latitude.value,
			d_longitude: d_longitude.value,
			route_key: route_key.value,
			created_at: now,
			updated_at: now
		}
		axios
			.post(
				`https://delivereh-server.herokuapp.com/user_requests/store`,
				request
			)
			.then((success) => {
				console.log(success)
			})
			.catch((error) => {
				console.log(error.response)
			})
	}

	if (role === 'customer') {
		return (
			<div className="customer-dashboard">
				<Sidebar />

				<div className="dashboard-body">
					<div ref={mapContainer} className="map-container" />
					<form className="location-form" onSubmit={handleSubmit}>
						<input type="hidden" name="s_longitude" value={sourceLocation[0]} />
						<input type="hidden" name="s_latitude" value={sourceLocation[1]} />
						<input
							type="hidden"
							name="d_longitude"
							value={destinationLocation[0]}
						/>
						<input
							type="hidden"
							name="d_latitude"
							value={destinationLocation[1]}
						/>
						<input type="hidden" name="s_address" value={sourceAddress} />
						<input type="hidden" name="d_address" value={destinationAddress} />
						<input type="hidden" name="user_id" value={userId} />
						<input type="hidden" name="booking_id" value={bookingId} />
						<input type="hidden" name="distance" value={distance} />
						<input type="hidden" name="route_key" value={mapKey} />
						<button className="submit-location">Get</button>
					</form>
				</div>
			</div>
		)
	} else {
		return <Redirect to="/" />
	}
}

export default CustomerDashboard
