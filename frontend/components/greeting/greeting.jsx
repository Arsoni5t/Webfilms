// import React from 'react';
// import { Link } from 'react-router-dom';
// import LoginForm from '../login_form'


// const Greeting = ({ currentUser, logout }) => {

//     const personalGreeting = () => (
//         <div className="banner">
//             <h2> Welcome {currentUser.email}!</h2>

//             <button onClick={logout}>Buh Bye</button>
//         </div>

//     );

//     const loginSignup = () => (

//         <div>

//             <Link to="/login">
//                 <input className="sign-in-button"
//                     type="submit" value="Sign In" />
//             </Link>
//             <p><LoginForm /></p>
//             <section>
//                 <h1 className="unlimited">Unlimited movies, films,<br />
//                 flicks, and more</h1>
//                 <p className="watch-anywhere">Watch anywhere. Cancel anytime.</p>
//                 <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
//                 <form>
                    
//                     <input type="text" className="trial" />
//                 </form>





//                 <button className="trial">
//                     <Link to="/signup">Sign up!</Link>
//                 </button>
//             </section>


//         </div>
//     );

//     return currentUser ? personalGreeting() : loginSignup();
// };

// export default Greeting