require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
// make these components-->
import VolunteerSurvey from './components/volunteer-survey';
import Volunteers from './components/volunteers';
import YouthSurvey from './components/youth-survey';



class App extends React.Component {
  render() {
    return (
    	<Router history={hashHistory} >
        <Route path="/" component={Layout}>
        	<IndexRoute component={Home} />
        	<Route path="our-volunteers" component={Volunteers} />
        	<Route path="volunteer" component={VolunteerSurvey} />
        	<Route path="participate" component={YouthSurvey} />
        </Route>
      </Router>
   
    )
  }
}


document.addEventListener('DOMContentLoaded', () =>
     ReactDOM.render(  <App>asd</App>, document.getElementById('app'))
);

/* function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
} 

<Router history={browserHistory} onUpdate={hashLinkScroll}>

*/