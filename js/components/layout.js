import React from 'react';

import HowItWorks from './how-it-works';
import Navbar from './navbar';
import GetInvolved from './get-involved';
import Volunteers from './meet-volunteers'

// import any actions, if needed
// connect react-redux, if needed

export class Layout extends React.Component {
	// dispatch any actions
	render() {
		return (
			<div className="container"> //or something
				<Navbar />
				<HowItWorks /> 
				<MeetVolunteers /> 
				<GetInvolved /> 
			</div>
		)
	}
}


				