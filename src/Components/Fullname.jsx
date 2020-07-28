import React, { useState } from "react";

function FullName() {

    const [name, setName] = useState(""); //Initial state of full name

    function nameValidation(event) {
        //Make sure full name is valid
        let valid = true;
    
        const newName = event.target.value;

        setName(newName);
    }

    return (
        <input 
        onChange={nameValidation}
        type="text"
        value={name}
        placeholder="Full Name"
        />
    );
}

export default FullName;