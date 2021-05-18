import React from "react";
import { Switch} from 'react-router-dom';
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
// import QueueContainer from './queue/queue_container';

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
            {/* <ProtectedRoute path="/queue" component={QueueContainer}/> */}
        </Switch>
    </div>
);

export default App;