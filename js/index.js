require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Layout from './components/layout';
import Home from './components/home';
// make these components-->
import VolunteerSurvey from './components/volunteer-survey';
import Volunteers from './components/volunteers';
import YouthSurvey from './components/youth-survey';


class App extends React.Component {
  render() {
    return (
    	<Router history={hashHistory}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={Home} />
        </Route>
      </Router>
   
    )
  }
}


document.addEventListener('DOMContentLoaded', () =>
     ReactDOM.render(  <App>asd</App>, document.getElementById('app'))
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
/*
<Route path="/participate" component={YouthSurvey} />
			<Route path="/volunteer" component={VolunteerSurvey} />
          	<Route path="/our-volunteers" component={Volunteers} /> */