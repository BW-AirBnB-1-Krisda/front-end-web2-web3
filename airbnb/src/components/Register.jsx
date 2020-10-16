import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });

  const handleNameChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

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
        <div className="username">
        <label>
          Username:
          <input
            type="text"
            name="name"
            placeholder="username"
            onChange={event => handleNameChange(event)}
          />
        </label>
        </div>
        <div className="password">
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={event => handleNameChange(event)}
          />
        </label>
        </div>
        <div className="email">
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={event => handleNameChange(event)}
          />
        </label>
        </div>
        <button className="submit">Submit</button>
        <div className="loginButton">
                <Link to="/">
                    <h5>Already a Member?</h5>
                  <button>Login</button>
                </Link>
              </div>
      </form>
    </div>
  );
}

export default Register;