import { Link } from 'react-router-dom';
import React from 'react'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.renderErrors = this.renderErrors.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.guestLogin = this.guestLogin.bind(this)
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

    guestLogin() {
        return e => {
            e.preventDefault();
            this.props.processForm({
                email: "demo@webfilms.com",
                password: "yomama"
            })
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit() {
        return e => {
            e.preventDefault();
            this.props.processForm(this.state)
        }
    }

    

    render() {

        let { email, password } = this.state;
        let { formType } = this.props;
        return (



            <div id="signup-bg">
                <div>
                <Link to="/" >
                    <img className="logosignup" src={window.logoUrl} />
                </Link>
                </div>
                <Link to="/login" className="demologin">Sign In</Link>
                <div><hr className="hr1" />
                </div>
                
                 <div className="container-signup"> 
                    <div>
                        <button className="itsfree">
                            Enjoy your first month. <strong className="strong">It's free.</strong>
                        </button>
                        <div>
                        <span className="signupstep">STEP <strong className="strong">1</strong> OF <strong className="strong">1</strong></span><br />
                        <p className="createpw">Create a password to start your free month.</p>
                        <br />
                        <p className="ordont">Or don't, and click the login button in the upper right! </p><br />
                        <p className="ordont">We hate paperwork, too.</p><br />
                     
                    <form >
                   
                            <input className="signup-pw" type="email" value={email} onChange={this.update("email")} placeholder="    Email" />
                            <input className="signup-pw" type="password" value={password} onChange={this.update("password")} placeholder="    Add a password"></input>


                            <button className="completesignupbutton" onClick={this.handleSubmit("signup")}>
                            COMPLETE SIGN UP
                        </button>
                    

                    </form>  
                    </div>
                    <br />
                    <div className="errorssignup">
                        {this.renderErrors()}
                    </div>
                </div>

            </div>
            </div>
        )
    }

}

export default SignupForm