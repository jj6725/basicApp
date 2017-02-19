import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import NoMatch from './NoMatch.jsx'
import Register from './Register.jsx'
import StudentForm from './StudentForm';
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
	<MuiThemeProvider getMuiTheme={lightBaseTheme}>  
	  	<Router history={browserHistory}>
		    <Route path="/" component={App}/>
			<Route path="/register" component={Register}/>
			<Route path="/studentform" component={StudentForm}/>
			<Route path="*" component={NoMatch}/>
	  	</Router>
	</MuiThemeProvider>
	,
  document.getElementById('root')
);
