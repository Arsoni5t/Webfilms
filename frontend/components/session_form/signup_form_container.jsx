import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors, login  } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'SIGN UP'
})

const mDTP = dispatch => ({
    demo: user => dispatch(login(user)),
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm)