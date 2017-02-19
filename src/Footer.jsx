import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Footer extends Component {

	var name; // this is going to come from the DB

	render() {
		return (
			<div className="container">
				<h6>Polly Want a FAFSA - 2017</h6>
			</div>
			);
	}
}

export default Footer;
