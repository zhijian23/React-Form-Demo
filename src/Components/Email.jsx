import React from "react";

function Email(props) {

    return (
        <input name="email" onChange={props.emailChange} type="email" value={props.emailValue} placeholder="Email" />
    );
}

export default Email;