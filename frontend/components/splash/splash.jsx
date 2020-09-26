import React from 'react';
import {Link} from 'react-router-dom'
import LoginPage from '../login/login_form'

class Splash extends React.Component {


    render(){
        return(
            <div className="banner">
                <img className="logo" src={window.logoUrl}/>
                
                <Link to="/login" >
                    <input className="sign-in-button"
                        type="submit" value="Sign In" />
                </Link>
                <h1 className="unlimited">Unlimited movies, films,<br />
                    flicks, and more</h1>
                {/* <p className="watch-anywhere">Watch anywhere. Cancel anytime.</p> */}
                        <form className="sign-up">
                            <input type="email"/><button className="free">TRY 30 DAYS FREE   ></button>
                        </form>
                <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
                
            </div>
            
        )
    }
}

export default Splash