import React from 'react';
import { Link } from 'react-router';

export class Navbar extends React.component {
	render() {
		return (
			<div className="header">
				<h1 className="brand"><a className="brand" href="#linkPlaceholder">KNOCK</a></h1>
				<nav id="dropdown">
					<a className="links" href="#link1">HOW IT WORKS</a>
					<a className="links" href="#link2">MEET A MENTOR</a>
					<a className="links" href="#link3">GET INVOLVED</a>
				</nav>
			</div>
		)
	}
}