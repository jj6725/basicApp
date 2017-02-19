import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Header extends Component {

	var name; // this is going to come from the DB

	render() {
		return (
			<div className="container">
				<h2>Welcome back, {name}</h2>
			</div>
			);
	}
}

export default Header;
