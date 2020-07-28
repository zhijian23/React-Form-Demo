import React from "react";
import FullName from "./Fullname";
import Email from "./Email";
import "./form.css" 

function Form() {
    return (
        <div className = "container">
            <h2>Registration Form</h2>
            <form>
                <FullName />
                <input type="text" placeholder="Username" />
                <Email />
                <input type="text" placeholder="Phone Number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;