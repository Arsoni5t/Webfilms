import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Route} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div className="banner">
        <header >
            
            {/* <h1>WEBFILMS</h1> */}
            <GreetingContainer />
          
        </header>
       
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;