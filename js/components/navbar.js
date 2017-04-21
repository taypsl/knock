import React from 'react';
import { Link } from 'react-router';
// import {HashLink as Link} from 'react-router-hash-link';
// may need to import hashLink===>
// npm install --save react-router-hash-link and import {HashLink as Link} from react-router-hash-link

export default class Navbar extends React.Component {
	render() {
		return (
			<div className="top-nav">
				<div className="brand"><Link to={"/"}>KNOCK</Link></div>
			    <input className="menu-toggle" id="menu-toggle" type="checkbox" />
			    <label className='menu-button-container' htmlFor="menu-toggle">
			    	<div className='menu-button'></div>
			    </label>
			    <ul className="menu">
		      		<li className="links"><Link to={"/#howitworks"}>HOW IT WORKS</Link></li>
					<li className="links"><Link to={"/#meetamentor"}>MEET A MENTOR</Link></li>
					<li className="links"><Link to={"/#getinvolved"}>GET INVOLVED</Link></li>
			    </ul>
			    
			</div>
		)
	}
}
