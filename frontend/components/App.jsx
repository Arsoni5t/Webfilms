import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './login/login_form_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseFormContainer from './browse/browse_container';
import SessionForm from "./session_form/session_form";
import NavContainer from './nav/nav_container';
import SearchResultsContainer from './search/search_results_container';
import FilmContainer from './film/film_container';
import Modal from './modal/modal';
import Home from './place/home';
import Pieces from './place/pieces';
import Place from './place/video';

const App = () => (
    <div >
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
        <Switch>
            <ProtectedRoute exact path="/browse/:filmId" component={FilmContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SessionForm} />
            <AuthRoute exact path="/signup/regform" component={SignupFormContainer} />
            <ProtectedRoute exact path="/browse" component={BrowseFormContainer}/>
            <ProtectedRoute exact path="/browse" component={NavContainer}/>
            <ProtectedRoute exact path="/search" component={SearchResultsContainer} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pieces' component={Pieces} />
            <Route exact path='/place' component={Place} />
        </Switch>
    </div>
);

export default App;