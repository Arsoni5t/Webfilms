import React from 'react';
import { Link } from 'react-router-dom';

// class LoginForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = this.props.user
//     }

//     render(){
//         return null
//     }
// }

const LoginForm = ({ currentUser, logout, login }) => {
    return(
        
    
        <div className="backgroundlogin">
            <Link to="/" >
                <img className="logo" src={window.logoUrl} />
            </Link>

            <div className="container">
                
                <form >
                    <h1 className="white">Sign In</h1>
                    <input className="login-email" type="email" placeholder="    Email"></input>
                    <input className="login-pw" type="password" placeholder="    Password"></input>
                    <Link to="/index">
                        <input className="login-button" type="submit" value="Sign In" onClick={login}/>
                    </Link>
                    
                </form>
            </div>
            
        </div>
    )
    // const personalGreeting = () => (
    //     <div className="banner">
    //         <h2> Welcome {currentUser.email}!</h2>

    //         <button onClick={logout}>Buh Bye</button>
    //     </div>

    // );

    // const loginSignup = () => (

    //     <div>

    //         {/* <Link to="/login">
    //             <input className="sign-in-button"
    //                 type="submit" value="Sign In" />
    //         </Link> */}
    //         {/* <p><LoginForm /></p> */}
    //         <section>
    //             <h1 className="unlimited">Unlimited movies, films,<br />
    //             flicks, and more</h1>
    //             <p className="watch-anywhere">Watch anywhere. Cancel anytime.</p>
    //             <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
    //             <form>

    //                 {/* <input type="text" className="trial" /> */}
    //             </form>





    //             <button className="trial">
    //                 <Link to="/signup">Sign up!</Link>
    //             </button>
    //         </section>


    //     </div>
    // );

    // return currentUser ? personalGreeting() : loginSignup();
};

export default LoginForm