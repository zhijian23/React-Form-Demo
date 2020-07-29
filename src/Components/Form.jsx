import React, { useState, useEffect } from "react";
import { emailValidation, userNameValidation, fullNameValidation } from "./RegistrationFormValidationRules";
import "./form.css"

function Form(callback) {

    const [values, setValues] = useState({
        fullName: "",
        userName: "",
        email: "",
        phoneNum: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        fullNameError: "",
        userNameError: "",
        emailError: "",
        phoneNum: "",
        password: ""
    });
    //const [isSubmitting, setIsSubmitting] = useState(false);

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && isSubmitting) {
    //     }
    // });

    function handleSubmit(event) {

        event.preventDefault();

        setErrors((prevErrors) => {
            return {
                ...prevErrors,
                fullNameError: fullNameValidation(values), //validate fullname input
                userNameError: userNameValidation(values),
                emailError: emailValidation(values) //validate email input
            }
        });
    }

    function handleChange(event) {

        const { name, value } = event.target;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        });

    }

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="fullName"
                    onChange={handleChange}
                    type="text"
                    value={values.fullName}
                    placeholder="Full Name"
                />

                <input
                    name="userName"
                    onChange={handleChange}
                    type="text"
                    value={values.userName}
                    placeholder="Username"
                />

                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    placeholder="Email"
                />

                <input
                    name="phoneNum"
                    onChange={handleChange}
                    type="text"
                    value={values.phoneNum}
                    placeholder="Phone Number"
                />

                <input
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;