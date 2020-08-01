import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function State(callback, validate) {

    const [values, setValues] = useState({
        fullName: "",
        userName: "",
        email: "",
        phoneNum: "",
        password: "",
        confirm: "",
        checkBox1: false,
        checkBox2: false
    });

    const [errors, setErrors] = useState({
        fullNameError: "", 
        userNameError: "",
        emailError: "",
        phoneNumError: "",
        passwordError: "",
        confirmError: "",
        checkBox1Error: "",
        checkBox2Error: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors]);

    let history = useHistory();

    function handleSubmit(event) {

        event.preventDefault();
        setErrors(validate(values));

        if (Object.keys(errors).length === 0){

            console.log("submit!")
            return history.push("/data");
        }
    }

    function handleChange(event) {

        const { name, value } = event.target;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        });

    }

    function handleCheck(event) {
        const { name } = event.target
        if (!values.checkBox1) {
            setValues((prevValue) => {
                return { ...prevValue, [name]: true };
            })
        } else {
            setValues((prevValue => {
                return { ...prevValue, [name]: false }
            }))
        }
    }

    function handleCheck2(event) {
        const { name } = event.target
        if (!values.checkBox2) {
            setValues((prevValue) => {
                return { ...prevValue, [name]: true };
            })
        } else {
            setValues((prevValue => {
                return { ...prevValue, [name]: false }
            }))
        }
    }

    return {
        handleChange,
        handleSubmit,
        handleCheck,
        handleCheck2,
        errors,
        values
    };
};

export default State;