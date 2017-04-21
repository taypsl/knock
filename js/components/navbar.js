import React from 'react';
import { Link } from 'react-router';
// import {HashLink as Link} from 'react-router-hash-link';
// may need to import hashLink===>
// npm install --save react-router-hash-link and import {HashLink as Link} from react-router-hash-link

export default class Navbar extends React.Component {
	render() {
		return (
			<div className="header">
				<h1 className="brand"><Link to={"/"}>KNOCK</Link></h1>
				<input id="menu-toggle" type="checkbox" />
				<label className="menu-button-container" htmlFor="menu-toggle">
					<div className="menu-button"></div>
  				</label>
				<ul id="dropdown" className="menu">
					<li className="links"><Link to={"/#howitworks"}>HOW IT WORKS</Link></li>
					<li className="links"><Link to={"/#meetamentor"}>MEET A MENTOR</Link></li>
					<li className="links"><Link to={"/#getinvolved"}>GET INVOLVED</Link></li>
				</ul>
			</div>
		)
	}
}