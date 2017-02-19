import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class MaritalStatus extends Component {
	render() {
		return (
			<div class="container">
			<div class="panel panel-default">
			<div class="panel-body">

			<div class="row">
			<div class="col-md-2">
			<br/>
			<br/>
			<a href="contactDetails.html"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a>

			</div>
			<div class="col-md-8"><h1>Marital Status</h1>
			<br/>
			<br/>
			<form>
			<label class="control-label" for="marital-toggle">What is your marital status?</label>
			<div class="radio">
			<label><input type="radio" name="marital-toggle" id="single" value="single"/>Single</label>
			</div>

			<div class="radio">
			<label><input type="radio" name="marital-toggle" id="married_remarried" value="married_remarried"/>Married or remarried</label>
			</div>

			<div class="radio">
			<label><input type="radio" name="marital-toggle" id="separated" value="separated"/>Separated</label>
			</div>

			<div class="radio">
			<label><input type="radio" name="marital-toggle" id="divorced" value="divorced"/>Divorced or Widowed</label>
			</div>


			</form>

			</div>
			<div class="col-md-2"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></div>
			</div>

			</div>
			</div>
			</div>
			);
	}
}

export default MaritalStatus;
