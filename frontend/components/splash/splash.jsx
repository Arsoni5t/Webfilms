import React from 'react';
import {Link} from 'react-router-dom'
import LoginPage from '../login/login_form'
import Enjoy from './enjoy'
// import Footer from './../browse/browse_footer'


class Splash extends React.Component {


    render(){
        return(
            <div className="blackbg">
                <div className="wrapper">

               
                <div className="banner">
                    <img className="logo" src={window.logoUrl}/>
                    
                    <Link to="/login" >
                        <input className="sign-in-button"
                            type="submit" value="Sign In" />
                    </Link>
                    <h1 className="unlimited">Unlimited movies, films,<br />
                        flicks, and more</h1>
                
                            <form className="sign-up">
                                {/* <input type="email"/> */}
                                        <Link to="/signup">
                                            <button className="free">TRY 30 DAYS FREE     ></button>
                                        </Link>
                            </form>
                    <p className="ready">Ready to watch? Click below to create or restart your membership.</p>
                    <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>   
                </div>
                <div>
                    <Enjoy />
                    
                </div>
                    
                
                   

             </div>
                <footer className="footfoot">
                    <div className="splashfooter">
                        <p className="splashfootertop">Hiring? Call 1-267-269-5454</p>
                        <a href="www.linkedin.com/in/bradlarsoncode"><p className="splashfooteritems">LinkedIn</p></a>

                        <a href="www.linkedin.com/in/bradlarsoncode"><p className="splashfooteritems">Help Center</p></a>
                        <a href="www.linkedin.com/in/bradlarsoncode"><p className="splashfooteritems">Terms of Use</p></a>
                        <a href="www.linkedin.com/in/bradlarsoncode"><p className="splashfooteritems">Privacy</p></a>


                    </div>
                </footer>
                    
            </div>
            
        )
    }
}

export default Splash