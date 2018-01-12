import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'; 
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
      <FlatButton {...this.props} label="Login" />
      <FlatButton {...this.props} label="Sign up" />
      </div>
    );
  }
}

const Logged = (props) => (
 
  <div>
  {/* <IconMenu
  //   {...props}
  //   iconButtonElement={
  //     <IconButton><MoreVertIcon /></IconButton>
  //   }
  //   targetOrigin={{horizontal: 'right', vertical: 'top'}}
  //   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  // >
  //   <MenuItem primaryText="Refresh" />
  //   <MenuItem primaryText="Help" />
  //   <MenuItem primaryText="Sign out" />
  // </IconMenu>*/}
  <FlatButton label="About us" />
  <FlatButton label="Contact us" />
  <FlatButton  label="Sign out" />
  </div>
);

Logged.muiName = 'div';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
  renderLinks(){
    if(this.props.authenticated){
      return <AppBar
          title="Adidda club"
        iconElementRight={<Logged />}
      />
    }
    else{
      return <AppBar
      title="Adidda club"
    iconElementRight={<Login />}
  />
    }
  }
  state = {
    logged: false,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        {/* <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        /> */}
        {this.renderLinks()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { 
    authenticated : state.auth.authenticated,
 };
}


export default connect(mapStateToProps)(Header);