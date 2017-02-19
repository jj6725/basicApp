import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import NoMatch from './NoMatch.jsx'

ReactDOM.render(
  	<Router history={browserHistory}>
	    <Route path="/" component={App}/>
		<Route path="*" component={NoMatch}/>
  	</Router>,
  document.getElementById('root')
);
