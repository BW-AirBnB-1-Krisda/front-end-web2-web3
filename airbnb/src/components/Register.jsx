import React, { useState } from "react";

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
        console.log(user.name);
        console.log(user.password);
        console.log(user.email)
    };

    return (
        <div className="App">
            {console.log(user)}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={event => handleNameChange(event)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={event => handlePasswordChange(event)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        onChange={event => handleEmailChange(event)}
                    />
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;