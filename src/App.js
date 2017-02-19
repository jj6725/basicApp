import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router'
import classNames from "classnames/bind";
import './App.css';
import Header from "./Header"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {TextField,RaisedButton,Divider} from 'material-ui';
import Styles from "./css/Default.css"

const cx = classNames.bind(Styles)

class App extends Component {
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
              <h1>Login</h1>
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
              <Link to="studentform">
                <RaisedButton label="Login" primary={true} />
              </Link>

              <br/>
              <br/>
              <br/>
              <Divider/>
              <h3>No account?</h3>
              <Link to="register">
                <RaisedButton label="Register" secondary={true}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

App.childContextTypes={
  muiTheme: PropTypes.object.isRequired
};

export default App;
