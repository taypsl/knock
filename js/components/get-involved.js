import React from 'react';
import { Link } from 'react-router';

export class GetInvolved extends React.component {
	render() {
		return (
			<div className="get-involved" id="link3">
				<section>
					<h2>GET INVOLVED</h2>
					<p>A small conversation can make a big difference. If you're interested in joining our pool of KNOCK mentors, please submit a profile request through the link below.</p>
					<div className="survey-links"><Link to={'/volunteer'}>Become a Mentor</Link></div>
				</section>
			</div>
		)
	}
}
