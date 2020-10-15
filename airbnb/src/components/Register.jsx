import React, { useState } from "react";
import "./Styles.css"

function Register () {
    const [user, setUser] = useState({username: "", password: "", email: ""});

    const handleNameChange = event => {
        setUser({...user, username: event.target.value});
    };

    const handlePasswordChange = event => {
        setUser({...user, password: event.target.value});
    };

    const handleEmailChange = event => {
        setUser({...user, email: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
        console.log(user.email)
    };

    return (
        <div className="base-container">
            <div className="header">Login</div>
                <div className="content">
                <div className="image">
                <img src="../components/airbnb.jpg" alt="" />
          </div>
            <form onSubmit={event => handleSubmit(event)}>
                <div className="form-group">
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            onChange={event => handleNameChange(event)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            onChange={event => handlePasswordChange(event)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            onChange={event => handleEmailChange(event)}
                        />
                    </label>
                </div>
                    <button className="btn">
                        Login
                    </button>
            </form>
            </div>
        </div>
    )
}

export default Register;