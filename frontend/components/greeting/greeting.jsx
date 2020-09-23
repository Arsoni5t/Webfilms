import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
<div >

   
    const personalGreeting = () => (
        <div>
            <h2> Welcome {currentUser.email}!</h2>

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
 </div>
    return currentUser ? personalGreeting() : loginSignup();
};
// class Greeting extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
           
//             <div className="banner">
//                 {currentUser ? personalGreeting() : loginSignup()}
//             </div>
//         )
//     }
// }
export default Greeting