import React from 'react';
import { Link } from 'react-router';

export default class GetInvolved extends React.Component {
	render() {
		return (
			<div className="get-involved" id="link3">
				<section>
					<h2>GET INVOLVED</h2>
					<p>A small conversation can make a big difference. If you're interested in joining our pool of KNOCK mentors, please submit a profile request through the link below.</p>
					<div className="links survey-link"><Link to={'/volunteer'}>Become a Mentor</Link></div>
				</section>
			</div>
		)
	}
}
