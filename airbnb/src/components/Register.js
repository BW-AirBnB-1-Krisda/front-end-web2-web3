import React, { useState, useEffect } from "react";
import { register } from "../actions";
import { connect } from "react-redux";
import * as Yup from "yup";


import { Link } from "react-router-dom";
import "../App.css";

function Register (props) {

    const [userRegister, setUserRegister] = useState({
        username: "",
        password: "",
        email: "",
        terms: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        email: "",
        terms: ""
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
        e.persist()
        const newUserRegister = {
            ...userRegister,
            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setUserRegister(newUserRegister);
    };

    const formSchema = Yup.object().shape({
        username: Yup
        .string()
        .required("Must include username"),
        password: Yup
        .string()
        .required("Password is Required"),
        email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Email is Required"),
        terms: Yup
        .boolean()
        .oneOf([true])
    });

    const submitRegisterForm = (e) => {
        e.preventDefault()
        props.register(userRegister, props.history)
        }

    useEffect(() => {
        formSchema.isValid(userRegister).then((valid) => {
          console.log("is my form valid", valid);
          setButtonIsDisabled(!valid);
        });
      }, [formSchema, userRegister]);

    return (
        <div className="register">
            <form onSubmit={submitRegisterForm}>
                    <label htmlFor="username">
                        Username:
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            value={userRegister.username}
                            onChange={handleInputChange}
                            data-cy="username"
                        />
                        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input 
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={userRegister.password}
                            onChange={handleInputChange}
                            data-cy="password"
                        />
                        {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={userRegister.email}
                            onChange={handleInputChange}
                            data-cy="email"
                        />
                        {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                    </label>
                        <label htmlFor="terms" className="terms">
                            Do you agree to the terms and conditions?
                            <input 
                            type="checkbox"
                            name="terms"
                            checked={userRegister.terms}
                            onChange={handleInputChange}
                            data-cy="terms"
                            />
                        </label>
                    <button 
                    className="submit" 
                    type="submit" 
                    disabled={buttonIsDisabled}
                    data-cy="submit" >
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