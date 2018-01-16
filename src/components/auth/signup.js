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
      'password',
      'confirmPassword'
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
  
  class Signup extends Component {
    handleFormSubmit ({email,password}){
         this.props.signupUser({email, password})();
    }
    state={
      open: false,
    }
   
 
    render() {
    const { handleSubmit, pristine,reset, submitting } = this.props;
    
    return ( 
      <form id = "signupForm"
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

    <Field type="password" name = "confirmPassword"
      component = {
        renderTextField
      }
      label = "Confirm Password" />
      </div> 
      </div>
       <div className = "formButton" >
       <div className="errorLoginMessage">
        {this.props.errorMessage}
        </div>
      <RaisedButton backgroundColor = "#33C9FF"
      label = "Sign Up"
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
      errorMessage : state.auth.error
   };
  }
  const SignupForm = reduxForm({ form: 'signupForm', validate })(Signup);
  export default connect(mapStateToProps, actions)(SignupForm);
  