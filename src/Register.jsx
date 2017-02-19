import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router'
import Header from "./Header"
import classNames from "classnames/bind";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {TextField,RaisedButton,FlatButton,Divider,RadioButtonGroup,RadioButton} from 'material-ui';
import Styles from "./css/StudentForm.css"

const cx = classNames.bind(Styles)

class Register extends Component {
	getChildContext() {
    return {muiTheme: getMuiTheme(lightBaseTheme)}
  };

	render() {
		return (
			<div>
				<Header/>
				<div className={cx('card','container')}>
					<div className="row">
						<div className="col-md-8 col-md-offset-1">
							<h1>Register</h1>
							<TextField
		            hintText="First Last"
		            floatingLabelText="Name"
		            type="name"
		          /><br/>

		          <TextField
		            hintText="abc@xzy.com"
		            floatingLabelText="Email Address"
		            type="username"
		          /><br/>

		          <TextField
		            hintText="Password"
		            floatingLabelText="Password"
		            type="password"
		          /><br/>

		          <TextField
		            hintText="Password"
		            floatingLabelText="Confirm Password"
		            type="password"
		          /><br/>
		          <br/>
		          <h4>Who are you?</h4>
		          <RadioButtonGroup name="KYC" defaultSelected="not_light">
					      <RadioButton
					        value="student"
					        label="Student"
					      />
					      <RadioButton
					        value="counselorounselor"
					        label="Counselor"
					      />
					    </RadioButtonGroup>
					    <br/>
					    <Link to="/">
		            <RaisedButton label="Register" primary={true} />
		          </Link>
							
							<br/><br/>
							<Divider/>
							<h3>Got an account?</h3>
							<Link to="/">
		            <RaisedButton label="Log in" secondary={true}/>
		          </Link>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

Register.childContextTypes={
  muiTheme: PropTypes.object.isRequired
};

export default Register;
