import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'; 
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';
import RadioButton from 'material-ui/RadioButton/RadioButton';
import asyncValidate from '../../utils/asyncValidate';
import * as actions from '../../actions';

const style = {
  margin: 12,
};


const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
    input,
    label,
    meta: {
      touched,
      error
    },
    ...custom
  }) =>
<TextField
  hintText = {
    label
  }
  floatingLabelText = {
    label
  }
  errorText = {
    touched && error}
    {...input}
    {...custom}
/>

class Signin extends Component {
  handleFormSubmit ({email,password}){
       //actions.signInUser({email, password});
       this.props.signInUser({email, password})();
  }
  state={
    open: false,
  }
 
  handleClose = () => {
    console.log('*******');
    this.setState({open: false});
  };
  handleOpen = () => {
    if(this.props.isModalOpen){
    this.setState({open: false});
    }
  };

  render() {
  const { handleSubmit, pristine,reset, submitting } = this.props;
  const dialogActions = [
    <FlatButton
      label="OK"
      primary={true}
      onClick={this.handleClose}
    />,
  ];

  return ( 
    <form id = "signinForm"
    onSubmit = {
      handleSubmit(this.handleFormSubmit.bind(this))
    } >
    
  <div className = "signinFields" >
   <div>
    <Field name = "email"
    component = {
      renderTextField
    }
    label = "Email" / >
    </div> 
    <div>

    <Field type="password" name = "password"
    component = {
      renderTextField
    }
    label = "Password" />
    </div> 
    </div>
     <div className = "formButton" >
     <div className="errorLoginMessage">
      {this.props.errorMessage}
      </div>
    <RaisedButton backgroundColor = "#33C9FF"
    label = "Sign in"
    fullWidth = {
      true
    }
    type = "submit"
    disabled = {
      pristine || submitting
    } >
    </RaisedButton>

    {/* <Dialog
          actions={dialogActions}
          modal={true}
          onRequestClose={this.handleOpen}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          {this.props.errorMessage}
        </Dialog> */}
  </div>
  </form>
  );
}

}

const mapStateToProps = (state) => {
  return { 
    errorMessage : state.auth.error,
  isModalOpen: state.auth.open
 };
}
const SigninForm = reduxForm({ form: 'signinForm', validate })(Signin);
export default connect(mapStateToProps, actions)(SigninForm);
