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



            <div className="backgroundlogin">

                <Link to="/" >
                    <img className="logo" src={window.logoUrl} />
                </Link>

                <div className="container">

                    <form >
                        <h1 className="white">{formType}</h1>
                        <input className="login-email" type="email" value={email} onChange={this.update("email")} placeholder="    Email" />
                        <input className="login-pw" type="password" value={password} onChange={this.update("password")} placeholder="    Password"></input>


                        <button className="login-button" onClick={this.handleSubmit("login")}>
                            {formType}
                        </button>

                        <button className="login-button" onClick={this.guestLogin()}>
                            Demo Login
                        </button>


                    </form>
                    <br />
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                </div>

            </div>
        )
    }

}

export default SignupForm