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
		.filter(function(user){
			return user.mentor
		})
		.filter(function(volunteer, index){
			if(self.props.limit) {
				return (index < self.props.limit)
			}
			return true
		})
		.map(function(volunteer) {
			return (
				<div className="profile"  key={volunteer.id}>
					<h4 className="name"><a href={volunteer.website}>{volunteer.username}</a></h4>
					<p className="title">{volunteer.title}</p>
					<p className="background">{volunteer.background}</p>
				</div>
			)
		})
		return (
				<div className="volunteers" id="link2">
					<section>
						<h2 className="section-header">meet our volunteers</h2>
						<p>Learn about real careers from real people.</p>
						<div className="profile-container">
							{volunteers}
						</div>
						<Link to={"/our-volunteers"} className="btn-style"><div className="btn-main">view more</div></Link>
					</section>
					<div className="grey-bar"></div>
				</div>
		)	
	}
}









// actually only want the section/div stuff to happen on main page, not on full volunteer page. will need to work out. 



