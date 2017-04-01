require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';


document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Layout />,
		document.getElementById('app'))
	);