import React, { Component } from 'react';
import { Link } from 'react-router'
import Residency from './student-forms/Residency'
import MaritalStatus from './student-forms/MaritalStatus'
import BasicInformation from './student-forms/BasicInformation'

class StudentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currIdx: 0,
    };
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  nextClick() {
    console.log(this.state.currIdx)
    if(this.state.currIdx<2){
      this.setState({
      currIdx: this.state.currIdx+1
      });
    } 
  }

  prevClick() {
    console.log(this.state.currIdx)
    if(this.state.currIdx>0){
      this.setState({
      currIdx: this.state.currIdx-1
      });
    } 
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Student Form</h1>
          {(() => {
            switch(this.state.currIdx){
              case 0:
                return <Residency/>
              case 1:
                return <MaritalStatus/>
              case 2:
                return <BasicInformation/>
            }
          })()}

          <div className="row">
            <div className="text-center">
              <button onClick={this.prevClick}><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
              <button onClick={this.nextClick}><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
            </div>
          </div>
      </div>
      );
  }
}

export default StudentForm;
