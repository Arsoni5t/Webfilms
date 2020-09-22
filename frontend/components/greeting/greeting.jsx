import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const personalGreeting = () => (
        <div>
            <h2 className="header-name">Take us to your Leader(no, please don't), {currentUser.email}!</h2>

            <button onClick={logout}>Buh Bye</button>
        </div>  

    );

   const loginSignup = () => (
           
        <div> 
            <Link to="/login">Login</Link>
            <p></p>
            <Link to="/signup">Sign up!</Link>
        </div>
    );

    return currentUser ? personalGreeting() : loginSignup();
};

export default Greeting