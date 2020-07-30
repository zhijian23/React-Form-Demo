import { useState, useEffect } from "react";

function State(callback, validate){

    const [values, setValues] = useState({
        fullName: "",
        userName: "",
        email: "",
        phoneNum: "",
        password: "",
        confirm: ""
    });

    const [errors, setErrors] = useState({
        fullNameError: "",
        userNameError: "",
        emailError: "",
        phoneNumError: "",
        passwordError: "",
        confirmError: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    },[errors]);

    function handleSubmit(event) {

        event.preventDefault();

        setErrors(validate(values));

        if (!values.confirm) {
            setErrors((prevErrors) => {
                return { ...prevErrors, confirmError: "Please confirm your password!" };
            })
        } else if (values.password !== values.confirm) {
            setErrors((prevErrors) => {
                return { ...prevErrors, confirmError: "Password does not match!" };
            })
        } else {
            setErrors((prevErrors) => {
                return { ...prevErrors, confirmError: {}};
            })
        } 
        setIsSubmitting(true);       
    }

    function handleChange(event) {

        const { name, value } = event.target;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        });

    }

    return {
        handleChange,
        handleSubmit,
        errors,
        values
    };
};

export default State;