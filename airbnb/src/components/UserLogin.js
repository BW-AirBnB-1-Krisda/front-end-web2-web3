import React, { useState } from 'react';
import { axiosWithAuth } from "../util/axiosWithAuth"


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
        axiosWithAuth()
        .post("/login", userLogin)
        .then((res) => {
            console.log("Successful login: ", res.data)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/dashboard")
        })
        .catch((err) => {
            console.log("Failed to login: ", err)
        })
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

export default UserLogin