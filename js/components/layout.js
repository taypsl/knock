import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

// import any actions, if needed
// connect react-redux, if needed

export default class Layout extends React.Component {
	// dispatch any actions
	render() {
		return (
			<div>
				<Navbar />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}



/*



*/
			 
			


			