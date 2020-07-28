import React, { useState } from "react";

function Email(){

    const [email, setEmail] = useState("");

    function handleChange(event){

        const newEmail = event.target.value;
        setEmail(newEmail);

    }

    function emailValidation(values){

        let errors = {}; //create errors object to store any possible error

        if (!email){
            errors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(email)){
            errors.email = "Email address is invalid!";
        }
        return errors;
    }

    return(
        <input onChange={handleChange} type="email" value = {email} placeholder="Email" />
    );
}

export default Email;