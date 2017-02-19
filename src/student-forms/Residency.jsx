import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">

              <div className="col-md-1"></div>

              <div className="col-md-8">
                <h1>Residency Status</h1>
                <form>
                  <label className="control-label" form="international-toggle">What is your residency status?</label>
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
                  <br/>

                  {
                    this.state.showInt?
                    <div title="A unique seven-, eight- or nine-digit number assigned to a noncitizen at the time his or her A-file is created" className="international-group"> 
                    <label className="control-label" form="alienNumber">Your Alien Registration number</label>
                    <input className="form-control" name="alienNumber" placeholder="A XXXX" type="text"/>
                    </div>
                    :
                    <div></div> 
                  }
                  
                  {
                    this.state.showSocial?
                    <div title="Your social security number"> 
                    <label className="control-label" form="ssn">Your Social Security Number</label>
                    <input className="form-control" name="ssn" placeholder="XXX-XX-XXXX" type="text"/>
                    </div>
                    :
                    <div></div> 
                  }
                
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      );
  }
}

export default Residency;
