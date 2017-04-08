import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<footer>
					<p className="copyright">Copyright &copy;<a href="https://taypsl.github.io/taypsl">taypsl</a> 2017</p>
				</footer>
			</div>
		)
	}
}