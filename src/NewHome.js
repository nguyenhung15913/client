import React from 'react'
import NewNavigation from './components/nav/NewNavigation'
import './NewHome.css'
import NewWelcome from './components/NewWelcome/NewWelcome'
function NewHome() {
	return (
		<div className="new-home">
			<NewNavigation />
			<NewWelcome />
		</div>
	)
}

export default NewHome
