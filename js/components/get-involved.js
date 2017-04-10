import React from 'react';
import { Link } from 'react-router';

export default class GetInvolved extends React.Component {
	render() {
		return (
			<div className="get-involved" id="link3">
				<div className="grey-bar-2"></div>
				<section>
					<h2 className="section-header">get involved</h2>
					<p>A small conversation can make a big difference. If you're interested in joining our group of <b>Knock</b> mentors, please submit a profile request through the link below.</p>
					<Link to={'/volunteer'} className="btn-style"><div className="btn-main">join us</div></Link>
				</section>
			</div>
		)
	}
}
