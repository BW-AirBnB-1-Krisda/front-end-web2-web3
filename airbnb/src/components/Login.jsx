import React, { useState } from "react";
import Register from "./Register"
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleNameChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div className="login">
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
        <div>
        <button className="submit">Submit</button>
        </div>
        <div className="nav-links">
              <div className="registerButton">
                <Link to="/Register">
                  <h5>New User?</h5>
                  <button>Create Account</button>
                </Link>
              </div>
          </div>
      </form>
    </div>
  );
}

export default Login;
