import React, { Component } from 'react';
import {TextField,RaisedButton,FlatButton,Divider,RadioButtonGroup,RadioButton,Snackbar} from 'material-ui';

class BasicInformation extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	gender: "male",
      showSS: true
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(event) {
  	console.log(event.target.value)
    this.setState({
    	gender: event.target.value==="male"?"male":"female",
      showSS: event.target.value==="male"?true:false
    });
  }

	render() {
		return (
			<div>
				<TextField
          hintText="First Name"
          floatingLabelText="First Name"
          type="name"
        /><br/>
        <TextField
          hintText="Last Name"
          floatingLabelText="Last Name"
          type="name"
        /><br/>

				<h4>Gender</h4>
				<div className="radio">
					<label>
					<input type="radio" name="optionsGender" id="male" value="male"
									checked={this.state.gender === "male"} 
                  onChange={this.onRadioChange}/>
            Male</label>
				</div>

				<div className="radio">
					<label>
						<input type="radio" name="optionsGender" id="female" value="female"
										checked={this.state.gender === "female"} 
                    onChange={this.onRadioChange}/>
						Female</label>
				</div> 
				<br/>
				
				{
					this.state.showSS?
					<div><h4>You have to <a href="http://www.google.com">register</a> with the Selective Service System.</h4></div>
					:
					<div></div>	
				}

			</div>
			);
	}
}

export default BasicInformation;
