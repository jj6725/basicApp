import React, { Component } from 'react';
import classNames from "classnames/bind";
import Residency from './student-forms/Residency'
import MaritalStatus from './student-forms/MaritalStatus'
import BasicInformation from './student-forms/BasicInformation'
import Header from './Header'
import Styles from "./css/StudentForm.css"
import {FlatButton,RaisedButton,Step,Stepper,StepLabel} from 'material-ui/';

const cx = classNames.bind(Styles)

class StudentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currIdx: 0,
      finished: false,
      stepIndex: 0,
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
      <div>
        <Header/>
        <div className={cx('card','container')}>
          <h1>Student Form</h1>
          <Stepper activeStep={this.state.currIdx}>
            <Step>
              <StepLabel>Residency Status</StepLabel>
            </Step>
            <Step>
              <StepLabel>Marital Status</StepLabel>
            </Step>
            <Step>
              <StepLabel>Basic Information</StepLabel>
            </Step>
          </Stepper>

          <div className={cx('padded')}>
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
          </div>

          <br/>
          <div className="row">
            <div className="text-center">
              <div class="btn-group" role="group" aria-label="...">
                <button type="button" className={this.state.currIdx===0?"btn btn-info disabled":"btn btn-info"} 
                                      onClick={this.prevClick}>
                  <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                </button>
                &nbsp;
                <button type="button" className={this.state.currIdx===2?"btn btn-success":"btn btn-info"} 
                                      onClick={this.nextClick}>
                  {
                    this.state.currIdx===2?
                    <div>submit</div>
                    :
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default StudentForm;
