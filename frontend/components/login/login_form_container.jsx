import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
// import SessionForm from './session_form';
import LoginForm from './login_form'

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign In'
});



const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors:() => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm)

