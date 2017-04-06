import React from 'react';
import { Link } from 'react-router';

export default class HowItWorks extends React.Component {
	render() {
		return (
			<div className="how-it-works" id="link1">
				<section>
					<h2>HOW IT WORKS</h2>
					<p>Meet real people who work in professional careers and learn about what they do. Whether you're interested in marketing, technology, science, or art, there's someone out there who can share their experiences with you.</p>
					<div className="survey-links"><Link to={'/participate'}>Get Started</Link></div>
				</section>
			</div>
		)
	}
}