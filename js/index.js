require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/layout';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Layout} />

	</Router>
)

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Layout />,
		document.getElementById('app'))
	);

// layout should render 
	// nav
	// get advice
	// meet volunteers
	// be a volunteer

// meet volunteers should render
	// 4 volunteer profiles (random)
	// button to view full volunteers list page
		// button on click renders all volunteer cards page

// participation buttons should render survey page

