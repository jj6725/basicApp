import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Residency extends Component {
	render() {
		return (
			<div className="container">
			<div className="panel panel-default">
			<div className="panel-body">

			<div className="row">
			<div className="col-md-2">
			<br/>
			<br/>
			<a href="contactDetails.html"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a>

			</div>
			<div className="col-md-8"><h1>Residency Status</h1>
			<br/>
			<br/>
			<form>
			<label className="control-label" for="international-toggle">What is your residency status?</label>
			<div className="radio">
			<label><input type="radio" name="international-toggle" id="citizen" value="citizen"/>US Citizen</label>
			</div>

			<div className="radio">
			<label><input type="radio" name="international-toggle" id="resident" value="resident" checked/>Legal US Resident</label>
			</div>

			<div className="radio">
			<label><input type="radio" name="international-toggle" id="nonResident" value="nonResident" checked/>Non-resident</label>
			</div> <br>

			<div title="A unique seven-, eight- or nine-digit number assigned to a noncitizen at the time his or her A-file is created" className="international-group"> 
			<label className="control-label" for="alienNumber">Your Alien Registration number</label>
			<input className="form-control" name="alienNumber" placeholder="A XXXX" type="text"/>
			</div> <br>

			<div title="Your social security number"> 
			<label className="control-label" for="ssn">Your Social Security Number</label>
			<input className="form-control" name="ssn" placeholder="XXX-XX-XXXX" type="text"/>
			</div> <br>
			</form>

			</div>
			<div className="col-md-2"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></div>
			</div>

			</div>
			</div>
			</div>

			);
	}
}

export default Residency;
