import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Register extends Component {
	render() {
		return (
			<div className="container">
			<h1>Register Page</h1>

			<form>
			<div className="form-group">
			<label for="name">Name</label>
			<input type="name" className="form-control" id="name" placeholder="Name" />
			</div>

			<div className="form-group">
			<label for="email">Email address</label>
			<input type="email" className="form-control" id="email" placeholder="Email" />
			</div>
			<div className="form-group">
			<label for="password">Password</label>
			<input type="password" className="form-control" id="password" placeholder="Password" />
			</div>
			<div className="form-group">
			<label for="confirmPassword">Confirm Password</label>
			<input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
			</div>
			<br/>
			<label className="control-label" for="userType">Who are you?</label>
			<div className="radio">
			<label><input type="radio" name="userType" id="student" value="student" />Student</label>
			</div>

			<div className="radio">
			<label><input type="radio" name="userType" id="counselor" value="counselor" />Counselor</label>
			</div> <br/>

			<button type="submit" className="btn btn-default">Register</button>

			<br/> <br/> <br/> 
			
			</form>

			<Link to="/" className="btn btn-default" role="button">or Log in</Link>
			</div>
			);
	}
}

export default Register;
