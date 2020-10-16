import React, { useState } from "react";
import { register } from "../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "../App.css";

const initialRegisterForm = {

    username: "",
    password: "",
    email: ""
}

function Register (props) {

    const [userRegister, setUserRegister] = useState(initialRegisterForm)

    const handleInputChange = (e) => {
        e.persist()
        setUserRegister({
            ...userRegister,
            [e.target.name] : e.target.value
        })
    }

    const submitRegisterForm = (e) => {
        e.preventDefault()
        props.register(userRegister, props.history)
        
    }

    return (
        <div className="App">
            <form onSubmit={submitRegisterForm}>
            <div className="username">
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="password">
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="email">
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                    <button className="submit">
                        Register
                    </button>

                    <div className="loginButton">
                <Link to="/login">
                    <h5>Already a Member?</h5>
                  <button>Login</button>
                </Link>
              </div>
            
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)