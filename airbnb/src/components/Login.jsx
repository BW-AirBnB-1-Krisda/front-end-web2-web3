import React, { useState } from "react";

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
        console.log(user.name);
        console.log(user.password);
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;
