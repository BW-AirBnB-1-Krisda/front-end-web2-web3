import React, { useState } from 'react';
import { login } from "../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "../App.css";


const initialLoginForm = {

    id: "",
    username: "",
    password: ""
}

function UserLogin(props) {

    const [userLogin, setUserLogin] = useState(initialLoginForm)

    const handleInputChange = (e) => {
        e.persist()
        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        })
    }

    const submitLoginForm = (e) => {
        e.preventDefault()
        props.login(userLogin, props.history)
        
    }

    return (
        <div className="App">
        <form onSubmit={submitLoginForm}>

        <div className="username"> 
            <label>Username:</label>
                <input
                minLength='8'
                placeholder='username'
                id='username'
                name="username"
                type='text'
                value={userLogin.username}
                onChange={handleInputChange}
                />
                </div>

            <div className="password">
            <label>Password:</label>
                <input
                placeholder='password'
                id='password'
                name='password'
                type='text'
                value={userLogin.password}
                onChange={handleInputChange}
                />
                </div>

            <div>
            <button className="submit">LOGIN</button>
            </div>
           
            <div className="nav-links">
               <div className="registerButton">
                 <Link to="/register">
                   <h5>New User?</h5>
                   <button>Create Account</button>
                 </Link>
               </div>
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)