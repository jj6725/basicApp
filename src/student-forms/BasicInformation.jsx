import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class BasicInformation extends Component {
	render() {
		return (
			<div className="container">
			<div className="panel panel-default">
			<div className="panel-body">

			<div className="row">
			<div className="col-md-2">
			<br/>
			<br/>
			<span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>

			</div>
			<div className="col-md-8"><h1>Basic contact information</h1>
			<br/>
			<br/>
			<form>
			<div className="form-group">
			<label className="control-label" for="fname">First Name</label>
			<input className="form-control" id="fname" name="fname" placeholder="your first name" type="text"/>
			</div> <br/>

			<div className="form-group">
			<label className="control-label" for="lname">Last Name</label>
			<input className="form-control" id="lname" name="lname" placeholder="your Last name" type="text"/>
			</div> <br/>


			<label className="control-label" for="gender">Gender</label>
			<div className="radio">
			<label><input type="radio" name="optionsGender" id="male" value="male"/>Male</label>
			</div>

			<div className="radio">
			<label><input type="radio" name="optionsGender" id="female" value="female" checked/>Female</label>
			</div> <br/>

			<div id="serviceSystem"><p>You have to register with the Selective Service System.</p></div>

			</form>

			</div>
			<div className="col-md-2"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			</div>


			</div>

			</div>
			</div>
			</div>

			);
	}
}

export default BasicInformation;
