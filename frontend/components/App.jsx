import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './login/login_form_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Index from './index/index'

const App = () => (
    <div >
        <header >
            {/* {<GreetingContainer />} */}
        </header>
        <AuthRoute exact path="/" component={Splash} />
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/index" component={Index}/>
        </Switch>
    </div>
);

export default App;