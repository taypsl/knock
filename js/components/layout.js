import React from 'react';
// import other components
import GetAnswers from '/get-answers';
import Navbar from '/navbar';
// import any actions, if needed
// connect react-redux, if needed

export class Layout extends React.component {
	// dispatch any actions
	render() {
		return (
			<div className="container"> //or something
				<Navbar className="navbar"/>
				<GetAnswers className="get-answers"/> // check against index.html 
				<MeetVolunteers className="meet-volunteers"/> //^ same
				<Volunteer className="volunteer"/> //^ same
			</div>
		)
	}
}

