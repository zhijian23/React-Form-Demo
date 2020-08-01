import { useState } from "react";
import { useHistory } from "react-router-dom";

function State(validate) {

    // setting up initial state of every input value
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

    // setting up initial state of error for every input
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


    let history = useHistory(); // use in handle submit function

    // handle onSubmit event
    function handleSubmit(event) {

        event.preventDefault(); //prevent submmision of the form before filling up input


        setErrors(validate(values)); // setting error state to none 

        // make sure no error before rendering new page
        if (Object.keys(errors).length === 0) {
            return history.push("/data")
        }
    }

    // handle changes in the input field and errors
    function handleChange(event) {

        // destructuring the event.target
        const { name, value } = event.target;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        }); // setting the values of each input to new value according input

        setErrors(validate(values)); // setting new errors according each new input
    }

    // handle changes in checkbox 1
    function handleCheck(event) {

        // destructuring the event.target
        const { name } = event.target

        if (!values.checkBox1) {
            setValues((prevValue) => {
                return { ...prevValue, [name]: true }; //return true if checkbox 1 is checked
            }) 
        } else {
            setValues((prevValue => {
                return { ...prevValue, [name]: false } //return false if checkbox 1 is unchecked
            }))
        }
    }

    // handle changes in checkbox 2
    function handleCheck2(event) {

        // destructuring the event.target
        const { name } = event.target

        if (!values.checkBox2) {
            setValues((prevValue) => {
                return { ...prevValue, [name]: true }; //return true if checkbox 2 is checked
            })
        } else {
            setValues((prevValue => {
                return { ...prevValue, [name]: false } //return false if checkbox 2 is checked
            }))
        }
    }

    return {
        // return to use in form.jsx
        handleChange,
        handleSubmit,
        handleCheck,
        handleCheck2,
        errors,
        values,
    };
};

export default State;