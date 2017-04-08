import React from 'react';
import { Link } from 'react-router';

import Hero from './hero';
import HowItWorks from './how-it-works';
import GetInvolved from './get-involved';
import Volunteers from './volunteers';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<HowItWorks />
				<Volunteers limit={2}/>
				<GetInvolved />
			</div>
		)
	}
}



