import React from 'react';
import {Link} from 'react-router';
import Volunteers from './volunteers';

export default class VolunteersWrapper extends React.Component {
	render() {
		return (
			<div className="volunteers" id="meetamentor">
				<section>
					<h2 className="section-header">meet our volunteers</h2>
					<p>Learn about real careers from real people.</p>
					<div className="profile-container">
						<Volunteers />{this.props.children}
					</div>
					<Link to={"/our-volunteers"} className="btn-style"><div className="btn-main">view more</div></Link>
				</section>
				<div className="grey-bar"></div>
			</div>
		)
	}
}


// this.props.children
