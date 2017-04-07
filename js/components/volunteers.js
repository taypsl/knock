import React from 'react';
import { Link } from 'react-router';

export default class Volunteers extends React.Component {
	// dispatch any actions

	constructor(){
		super(); 
		this.state={
			volunteers:[]
		}
	}

	static defaultProps() {
	    return {
	      limit: 4
	    }
	}

	componentDidMount() {
		return fetch('https://important-scraper.glitch.me/users')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({volunteers: responseJson});
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		var self=this;
		var volunteers = this.state.volunteers
		.filter(function(volunteer, index){
			if(self.props.limit) {
				return (index < self.props.limit)
			}
			return true
		})
		.map(function(volunteer) {
			return (
				<div className="user-profile">
					<h4><a href="{volunteer.website}">{volunteer.username}</a></h4>
					<p>{volunteer.title}</p>
					<br />
				</div>
			)
		})
		return (
				<div className="volunteers" id="link2">
					<section>
						<h2>MEET OUR VOLUNTEERS</h2>
						<b>{volunteers}<br /></b>
						<div className="survey-link"><Link to={'/our-volunteers'}>View More</Link></div>
					</section>
				</div>
		)	
	}
}

// actually only want the section/div stuff to happen on main page, not on full volunteer page. will need to work out. 



