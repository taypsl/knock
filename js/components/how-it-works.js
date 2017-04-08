import React from 'react';
import { Link } from 'react-router';

export default class HowItWorks extends React.Component {
	render() {
		return (
			<div className="how-it-works" id="link1">
				<div className="grey-bar"></div>
				<section>
					<h2 className="section-header">how it works</h2>
					<div className="container list-item">
						<div className="row">
							<div className="col-sm-2">
								<img src="../assets/images/icn_list1@2x.png" />
							</div>
							<div className="col-sm-10">
								<p className="list-text">Meet real people who work in professional careers and learn about what they do.</p>
							</div>
						</div>
					</div>
					
					<div className="container list-item">
						<div className="row">
							<div className="col-sm-2">
								<img src="../assets/images/icn_list2@2x.png" />
							</div>
							<div className="col-sm-10">
								<p className="list-text">Set up a time to have a 20 minute call where you can ask questions about their experiences in their daily job, and how they achieved their career goals.</p>
							</div>
						</div>
					</div>	

					<div className="container list-item">
						<div className="row">
							<div className="col-sm-2">
								<img src="../assets/images/icn_list3@2x.png" />
							</div>
							<div className="col-sm-10">
								<p className="list-text">Check out some of our volunteers below, and fill out a short questionaire to get started.</p>
							</div>
						</div>
					</div>

					<Link to={'/participate'} className="btn-style"><div className="btn-main">get started</div></Link>
				</section>
				<div className="grey-bar"></div>
			</div>
		)
	}
}