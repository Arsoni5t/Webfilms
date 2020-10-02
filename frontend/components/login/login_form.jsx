import { Link } from 'react-router-dom';
import React from 'react'

class LoginForm extends React.Component {
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
    
    componentDidMount() {
        this.props.clearErrors();
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

    guestLogin(){
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

    render(){

        let { email, password } = this.state;
        let { formType } = this.props;
        return (

            

            <div className="backgroundlogin">
                
                <Link to="/" >
                    <img className="logo" src={window.logoUrl} />
                </Link>

                <div className="container">
                    
                    <form >
                         <h1 className="white">{formType}</h1>
                        <input className="login-email" type="email" value={email} onChange={this.update("email")} placeholder="    Email"/>
                        <input className="login-pw" type="password" value={password} onChange={this.update("password")} placeholder="    Password"></input>
                        <div className="errors">
                            {this.renderErrors()}
                        </div>

                        <button className="login-button" onClick={this.handleSubmit("login")}>
                            {formType}
                        </button>

                        <button className="login-button" onClick={this.guestLogin()}>
                            Demo Login
                        </button>
                       
                       
                    </form> 
                    <br/>
                    <p className="newtowebfilms">New to Webfilms? <Link className="newtowebfilmslink" to="/signup" >Sign up now.</Link></p>
                </div>
                <div className="loginfooter">
                    <p className="loginfootertop">Hiring? Call 1-267-269-5454</p>
                    <a href="https://linkedin.com/in/bradlarsoncode"  className="loginfooteritems">LinkedIn</a>
                    <a href="https://github.com/Arsoni5t/Webfilms"  className="loginfooteritems3">GitHub</a>
                    <a href="https://letterboxd.com/Bradlarson/"  className="loginfooteritems3">LetterBoxd</a>
                    <a href="https://bit.ly/3l7T3uJ"  className="loginfooteritems3">Corporate Policy</a>
                
                </div>
                <div onClick={this.props.clearErrors} />
            </div>
        )
    }

}

export default LoginForm
