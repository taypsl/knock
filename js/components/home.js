import React from 'react';
import { Link } from 'react-router';

import Hero from './hero';
import HowItWorks from './how-it-works';
import GetInvolved from './get-involved';
import VolunteersWrapper from './volunteers-wrapper';

export default function Home(props) {
	return (
		<div>
			<Hero />
			<HowItWorks />
			<VolunteersWrapper limit={4}/>
			<GetInvolved />
		</div>
	)
}



