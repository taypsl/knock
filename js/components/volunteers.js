import React from 'react';

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
      limit:2
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
			if(self.props.limit){
				return (index<self.props.limit)
			}
			return true

			
		})
		.map(function(volunteer) {
			return <b>{volunteer.username}<br /></b>
		})
		return (
			<div className="container">

			{volunteers}

			</div>
			)
		
	}
}





