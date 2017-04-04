import React from 'react';
import { Link } from 'react-router';
// may need to import hashLink===>
// npm install --save react-router-hash-link and import {HashLink as Link} from react-router-hash-link

export class Navbar extends React.component {
	render() {
		return (
			<div className="header">
				<h1 className="brand"><Link to={/}>KNOCK</Link></h1>
				<nav id="dropdown">
					<li className="links"><Link to={/#link1}>HOW IT WORKS</Link></li>
					<li className="links"><Link to={/#link2}>MEET A MENTOR</Link></li>
					<li className="links"><Link to={/#link3}>GET INVOLVED</Link></li>
				</nav>
			</div>
		)
	}
}

