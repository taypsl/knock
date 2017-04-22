import React from 'react';
import { Link } from 'react-router';

export default class Hero extends React.Component {
	render() {
		return (
			<div>
				<video id="videohero" className="fill" preload="auto" autoPlay="true" muted="muted" poster="">
				    <source src="../assets/knock-test2-low-540.mp4" type="video/mp4" />
			    	Sorry, your browser does not support HTML5 video.
				</video>
				<Link to={'/#howitworks'}><div className="knock-icon">knock<div className="down-icon"></div></div></Link>
			</div>
		)
	}
}

// loop="loop"