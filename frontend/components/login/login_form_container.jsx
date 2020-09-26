import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
// import SessionForm from './session_form';
import LoginForm from './login_form'

const mSTP = ({errors}) => ({
    errors: errors.session,
});



const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(LoginForm)

