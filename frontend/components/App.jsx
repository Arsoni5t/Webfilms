import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './login/login_form_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import IndexFormContainer from './index/index_container'
import SessionForm from "./session_form/session_form";

const App = () => (
    <div >
        <header >
            {/* {<GreetingContainer />} */}
        </header>
        <AuthRoute exact path="/" component={Splash} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            
            <AuthRoute exact path="/signup" component={SessionForm} />
            <AuthRoute exact path="/signup/regform" component={SignupFormContainer} />
            <ProtectedRoute path="/index" component={IndexFormContainer}/>
        </Switch>
    </div>
);

export default App;