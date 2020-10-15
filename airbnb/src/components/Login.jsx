import React, { useState } from "react";
import "./Style.css";

function Login () {
    const [user, setUser] = useState({username: "", password: ""});

    const handleNameChange = event => {
        setUser({...user, username: event.target.value});
    };

    const handlePasswordChange = event => {
        setUser({...user, password: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
    };

    return (
        <div className="base-container">
            <div className="header"></div>
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
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                    </div>
            </form>
            </div>
        </div>
    )
}

export default Login;
