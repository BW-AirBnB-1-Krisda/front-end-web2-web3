import React, { useState } from "react";

const initialRegisterForm = {

    username: "",
    password: "",
    email: ""
}

function Register () {

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
        // props.register(userRegister)
        props.history.push("/listings")
        
    }

    return (
        <div>
            <div>Register</div>
                <div>
                <div>
          </div>
            <form onSubmit={submitRegisterForm}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                    <button>
                        Register
                    </button>
            </form>
            </div>
        </div>
    )
}

export default Register;