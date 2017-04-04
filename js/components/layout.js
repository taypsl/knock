import React from 'react';

import HowItWorks from '/get-answers';
import Navbar from '/navbar';
import GetInvolved from '/get-involved';

// import any actions, if needed
// connect react-redux, if needed

export class Layout extends React.Component {
	// dispatch any actions
	render() {
		return (
			<div className="container"> //or something
				<Navbar />
				<HowItWorks /> // check against index.html 
				<MeetVolunteers /> //^ same
				<GetInvolved /> //^ same
			</div>
		)
	}
}

