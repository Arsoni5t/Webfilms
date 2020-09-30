import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './login/login_form_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseFormContainer from './browse/browse_container'
import SessionForm from "./session_form/session_form";
import FilmContainer from './film/film_container'

const App = () => (
    <div >
        <header >
            {/* {<GreetingContainer />} */}
        </header>

        <AuthRoute exact path="/" component={Splash} />
        
        <Switch>
            <ProtectedRoute exact path="/browse/:filmId" component={FilmContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SessionForm} />
            <AuthRoute exact path="/signup/regform" component={SignupFormContainer} />
            <ProtectedRoute exact path="/browse" component={BrowseFormContainer}/>

        </Switch>
    </div>
);

export default App;