import React from 'react';
import { Link } from 'react-router';

import Hero from './hero';
import HowItWorks from './how-it-works';
import GetInvolved from './get-involved';
import Volunteers from './volunteers';

export default function Home(props) {
	return (
		<div>
			<Hero />
			<HowItWorks />
			<Volunteers limit={4}/>
			<GetInvolved />
		</div>
	)
}



