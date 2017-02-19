import React, { Component } from "react";
import { Link } from "react-router"
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

class Header extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider getMuiTheme={lightBaseTheme}>  
          <AppBar
            title="PollyFafsa"
            iconElementRight={<FlatButton label="Student Name"/>}
          />
        </MuiThemeProvider>
        <br/>
      </div>
      );
  }
}

export default Header;
