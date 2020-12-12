import React from 'react';
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderErrors() {
        let err = Array.from(this.props.errors);
        return (
        <ul>
            {err.map((error, id) => (
                <li key={id}>
                    {error}
                </li>
            ))}
        </ul>
        );
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    render(){
        return(
            <div id="signup-bg">
                <div>
                    <Link to="/" >
                        <img className="logosignup" src={window.logoUrl} />
                    </Link>
                </div>
                <Link to="/login" className="demologin">Sign In</Link>
                <div>
                    <hr className="hr1"/>
                </div>
                
                <img className="devices" src={window.devicesUrl} />
                <span className="content-top">STEP <strong className="strong">1</strong> OF <strong className="strong">1</strong></span><br/>
                <p className="finish">Finish setting up your account.</p>
                <br/>
                <p className="signupwords">Webfilms is personalized for you. Create </p><br/>
                    <p className="signupwords">a password to watch Webfilms on any</p><br/>
                <p className="signupwords">device at any time. </p>

                <form onSubmit={this.handleSubmit} >
                    <input type="hidden" name="authenticity_token" value="<%=form_authenticity_token%>"/>
                    <div>
                        <Link className="continue" to="/signup/regform">CONTINUE</Link>
                    </div>
                </form> 
                
                    <span></span>
                    <div className="signupfooter">
                        <p className="footertop">Hiring?</p>
                        <a href="https://www.linkedin.com/in/bradlarsoncode" target="_blank"  className="footeritems">LinkedIn</a>
                        <a href="https://github.com/bradlarsoncode/Webfilms" target="_blank" className="footeritems3">GitHub</a>
                        <a href="https://angel.co/u/brad-larson-4"  target="_blank" className="footeritems3">AngelList</a>
                        <a href="http://www.bradlarson.me" target="_blank" className="footeritems3">Portfolio</a>
                    </div>     
            </div>
        )
    }
}

export default SessionForm