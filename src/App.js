import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import './App.css';

class App extends Component {

  submitClick() {

  }
  render() {
    return (
      <div className="container">
      <h1>Login Page</h1>

      <form>
        <div className="form-group">
          <label form="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label form="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>

        <button type="submit" className="btn btn-default">Submit</button>
        <br/><br/><br/>
      </form>

      <Link to="Register" className="btn btn-default" role="button">or Register</Link>
      </div>
      );
  }
}

export default App;
