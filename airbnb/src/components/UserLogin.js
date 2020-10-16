import React, { useState } from 'react';
import { login } from "../actions";
import { connect } from "react-redux";


const initialLoginForm = {

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
        // props.history.push("/listings")
        
    }

    return (
        <form onSubmit={submitLoginForm}>

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

            <label>Password:</label>
                <input
                placeholder='password'
                id='password'
                name='password'
                type='text'
                value={userLogin.password}
                onChange={handleInputChange}
                />

            <div>
            <button>LOGIN</button>
            </div>
            <div>

            <button>FORGOT PASSWORD</button>
            </div>
            
            <a>Don't have an account?</a>
            
            <button>Create account</button>

        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)