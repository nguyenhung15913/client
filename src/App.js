import './App.css'

import Home from './Home'
import About from './About'
import ContactPage from './ContactPage'
import DeliveryRequest from './components/DeliveryRequest/DeliveryRequest'
import CustomerSignIn from './components/CustomerSignIn/CustomerSignIn'
import CustomerRegistration from './components/CustomerRegistration/CustomerRegistration'

import Driver from './components/Driver/Driver'
import NewDriver from './components/NewDriver/NewDriver'

import Partner from './components/Partner/Partner'
import NewPartner from './components/NewPartner/NewPartner'

import NewHome from './NewHome'

// admin
import Dashboard from './Admin/AdminComponents/dashboard/Dashboard'
import DeliverehDrivers from './Admin/AdminComponents/DeliverehDrivers/DeliverehDrivers'
import CurrentOrders from './Admin/AdminComponents/CurrentOrders/CurrentOrders'
import Order from './Admin/AdminComponents/Order/Order'

//CRUD
import UserIndex from './components/CRUD/users/UserIndex'

//dashboard
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard'
import ShipperDashboard from './components/ShipperDashboard/ShipperDashboard'
import DriverDashboard from './components/DriverDashboard/DriverDashboard'

//protected route

//order
import CustomerOrder from './components/customerOrder/CustomerOrder'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import { Switch, Route } from 'react-router-dom'
function App() {
	let isAuth = localStorage.getItem('isAuthenticated')
	let role = localStorage.getItem('role')

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/new-home" render={() => <NewHome />} />
				<Route exact path="/about" render={() => <About />} />
				<Route exact path="/contact" render={() => <ContactPage />} />
				<Route
					exact
					path="/delivery-request"
					render={(props) => <DeliveryRequest />}
				/>
				<Route exact path="/login" render={(props) => <CustomerSignIn />} />
				<Route
					exact
					path="/register"
					render={(props) => <CustomerRegistration />}
				/>

				<Route exact path="/provider/login" render={(props) => <Driver />} />
				<Route exact path="/provider/register" render={() => <NewDriver />} />
				<Route exact path="/partner/login" render={(props) => <Partner />} />
				<Route
					exact
					path="/partner/register"
					render={(props) => <NewPartner />}
				/>

				{/* Admin */}
				<Route exact path="/admin" render={(props) => <Dashboard />} />

				<Route
					exact
					path="/admin/dashboard"
					render={(props) => <Dashboard />}
				/>

				<Route
					exact
					path="/admin/drivers"
					render={(props) => <DeliverehDrivers />}
				/>
				<Route
					exact
					path="/admin/orders"
					render={(props) => <CurrentOrders />}
				/>
				<Route path="/admin/order-search" render={(props) => <Order />} />

				{/* CRUD */}
				<Route path="/users" render={() => <UserIndex />} />

				{/* dashboard protected route */}

				<ProtectedRoute
					path="/customers/dashboard"
					component={CustomerDashboard}
					role={role}
					isAuth={isAuth}
				/>

				<ProtectedRoute
					path="/shippers/dashboard"
					isAuth={isAuth}
					role={role}
					component={ShipperDashboard}
				/>

				<ProtectedRoute
					path="/drivers/dashboard"
					component={DriverDashboard}
					isAuth={isAuth}
					role={role}
				/>

				{/* Order */}
				<Route path="/order" render={() => <CustomerOrder />} />
			</Switch>
		</div>
	)
}

export default App
