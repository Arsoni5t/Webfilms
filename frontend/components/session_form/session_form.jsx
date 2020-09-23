import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        // this.renderErrors = this.renderErrors.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, id) => (
    //                 <li key={id}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

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
            <div >
                <form onSubmit={this.handleSubmit} >
                    <input type="hidden" name="authenticity_token" value="<%=form_authenticity_token%>"/>
                    {/* Please {this.props.formType} */}
                    {this.renderErrors()}
                    <p>
                    
                    </p>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <p></p>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <p></p>
                    <input type="submit" value={this.props.formType}/>

                </form>
            </div>
        )
    }
}

export default SessionForm