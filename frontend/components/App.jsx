// import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
// import {Route, Link, Switch} from 'react-router-dom';
// import SignupFormContainer from './session_form/signup_form_container';
// import LoginFormContainer from './session_form/login_form_container';
// import {AuthRoute} from '../util/route_util';

// const App = () => (
//     <div>
//         <header>
            
//             <h1>WEBFILMS</h1>
//             { <GreetingContainer />}
          
//         </header>
    

//             <Route exact path="/" component={GreetingContainer} />
//             <AuthRoute path="/login" component={LoginFormContainer} />
//             <AuthRoute path="/signup" component={SignupFormContainer} />
       
            

//     </div>
// );

// export default App;


import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Splash from './splash/splash'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div >
        <header >

            {/* <h1>WEBFILMS</h1> */}
            {/* <GreetingContainer /> */}

        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;