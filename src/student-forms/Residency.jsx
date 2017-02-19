import React, { Component } from 'react';
import {TextField,RaisedButton,FlatButton,Divider,RadioButtonGroup,RadioButton} from 'material-ui';

class Residency extends Component {
	constructor(props) {
    super(props);
    this.state = {
      status: "citizen",
      showInt: false,
      showSocial: true,
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(event) {
    this.setState({
      status: event.target.value
    });

    if(event.target.value==="nonResident"){
      this.setState({
        showInt: true,
        showSocial: false
      });
    }else{
      this.setState({
        showInt: false,
        showSocial: true
      })
    }
  }

  render() {
    return (
      <div>
        <br/>
        <h4>What is your residency status?</h4>
        <div className="radio">
          <label>
            <input  type="radio" name="international-toggle" id="citizen" value="citizen"
                    checked={this.state.status === "citizen"} 
                    onChange={this.onRadioChange}
                    />
            US Citizen
          </label>
        </div>
        <div className="radio">
          <label>
            <input  type="radio" name="international-toggle" id="resident" value="resident"
                    checked={this.state.status === "resident"} 
                    onChange={this.onRadioChange}
                    />
            Legal US Resident
          </label>
        </div>
        <div className="radio">
          <label>
            <input  type="radio" name="international-toggle" id="nonResident" value="nonResident"
                    checked={this.state.status === "nonResident"} 
                    onChange={this.onRadioChange}
                    />
            Non-resident
          </label>
        </div> 
        
        <div>
        {
          this.state.showInt?
          <TextField
            hintText="A XXXX"
            floatingLabelText="Your Alien Registration number"
            type="aliennumber"
          />
          :
          <div></div> 
        }
        
        {
          this.state.showSocial?
          <TextField
            hintText="XXX-XX-XXXX"
            floatingLabelText="Your Social Security Number"
            type="social"
          />
          :
          <div></div> 
        }
        </div>

      </div>
    );
  }
}

export default Residency;
