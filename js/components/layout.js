import React from 'react';

import HowItWorks from './how-it-works';
import Navbar from './navbar';
import Hero from './hero'
import GetInvolved from './get-involved';
import Volunteers from './volunteers';

// import any actions, if needed
// connect react-redux, if needed

export default class Layout extends React.Component {
	// dispatch any actions
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
				<HowItWorks />
				<Volunteers limit={2}/>
				<GetInvolved />
			</div>
			)
	}
}



/** 
			 
			*/