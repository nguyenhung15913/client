import { Route, Redirect } from 'react-router-dom'
function ProtectedRoute({
	role,
	isAuth: isAuth,
	component: Component,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth) {
					return <Component role={role} />
				} else {
					return (
						<Redirect
							to={{ pathname: '/login', state: { from: props.location } }}
						/>
					)
				}
			}}
		/>
	)
}

export default ProtectedRoute
