import React, { useState, useEffect } from "react";
import { login } from "../actions";
import { connect } from "react-redux";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import "../App.css";

function UserLogin() {

    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
      });

    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    const validateChange = (e) => {
        Yup
          .reach(formSchema, e.target.username)
          .validate(e.target.value)
          .then((valid) => {
            setErrors({ ...errors, [e.target.username]: "" });
          })
          .catch((err) => {
            setErrors({ ...errors, [e.target.username]: err.errors[0] });
          });
      };

    const handleInputChange = (e) => {
        e.persist();
        const newUserLogin = {
            ...userLogin,
            [e.target.name] : e.target.value
        };
        validateChange(e);
        setUserLogin(newUserLogin);
    }

    const submitLoginForm = (e) => {
        e.preventDefault()
        setUserLogin({
            username: "",
            password: ""
        })
        console.log(userLogin)
    }

    const formSchema = Yup.object().shape({
        username: Yup
        .string()
        .required("Must include username"),
        password: Yup
        .string()
        .required("Password is Required")
    })

    useEffect(() => {
        formSchema.isValid(userLogin).then((valid) => {
            console.log(valid)
            setButtonIsDisabled(!valid)
        })
    }, [formSchema, userLogin])

    return (
        <div className="login">
        <form onSubmit={submitLoginForm}>
            <label htmlFor="username">
                Username:
                <input 
                placeholder="username"
                id="username"
                name="username"
                type="text"
                value={userLogin.username}
                onChange={handleInputChange}
                data-cy="username"
            />
                {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
            </label>
            <label htmlFor="password">
                Password:
                <input htmlFor="password"
                placeholder="password"
                id="password"
                name="password"
                type="text"
                value={userLogin.password}
                onChange={handleInputChange}
                data-cy="password"
                />
                {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            </label>
            <div>
            <button className="submit" type="submit" disabled={buttonIsDisabled} data-cy="submit" >LOGIN</button>
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