import React, { useState } from "react";
import { register } from "../actions";
import { connect } from "react-redux";

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