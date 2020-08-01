import React, { useState } from "react";
import State from "./State";
import Validation from "./RegistrationFormValidationRules";
import "./form.css";

function Form() {

    function submit() {
        console.log("no errors!")
    }

    const {
        handleChange,
        handleSubmit,
        handleCheck,
        handleCheck2,
        errors,
        values
    } = State(submit, Validation)

    const [mouseOver, setMouseOver] = useState(false)

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="wall">
            <h1>Registration Form</h1><br />
            <form onSubmit={handleSubmit}>
                <label className="label" for="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    onChange={handleChange}
                    type="text"
                    value={values.fullName}
                    placeholder="Full Name"
                />
                <div>
                    {errors.fullNameError
                        && (<p className="help is-danger">{errors.fullNameError}
                        </p>)}
                </div>

                <label className="label" for="userName">Username</label>
                <input
                    id="userName"
                    name="userName"
                    onChange={handleChange}
                    type="text"
                    value={values.userName}
                    placeholder="Username"
                />
                <div>
                    {errors.userNameError
                        && (<p className="help is-danger">{errors.userNameError}
                        </p>)}
                </div>

                <label className="label" for="Email">Email</label>
                <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    placeholder="Email"
                />
                <div>
                    {errors.emailError
                        && (<p className="help is-danger">{errors.emailError}
                        </p>)}
                </div>

                <label className="label" for="phoneNum">Phone Number</label>
                <input
                    id="phoneNum"
                    name="phoneNum"
                    onChange={handleChange}
                    type="text"
                    value={values.phoneNum}
                    placeholder="Phone Number"
                />
                <div>
                    {errors.phoneNumError
                        && (<p className="help is-danger">{errors.phoneNumError}
                        </p>)}
                </div>

                <label className="label" for="password">Password</label>
                <input
                    id="password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    placeholder="Password"
                />
                <div>
                    {errors.passwordError
                        && (<p className="help is-danger">{errors.passwordError}
                        </p>)}
                </div>

                <label className="label" for="confirm">Confirm Password</label>
                <input
                    id="confirm"
                    name="confirm"
                    onChange={handleChange}
                    type="password"
                    value={values.confirm}
                    placeholder="Confirm Password"
                />
                <div>
                    {errors.confirmError
                        && (<p className="help is-danger">{errors.confirmError}
                        </p>)}
                </div><br />

                <hr size="2" noshade="1" />

                <h1 style={{ fontSize: "25px" }}><strong>Disclaimer</strong></h1>

                <input
                    id="check"
                    name="checkBox1"
                    type="checkbox"
                    style={{ width: "20px", marginBottom: "5px" }}
                    onChange={handleCheck}
                    value={values.checkBox1}
                />
                <p2>I confirm that the information given above is true and accurate*</p2><br />
                <div>
                    {errors.checkBox1Error
                        && (<p className="help is-danger">{errors.checkBox1Error}
                        </p>)}
                </div><br />

                <input
                    id="check"
                    name="checkBox2"
                    type="checkbox"
                    style={{ width: "20px", marginBottom: "5px" }}
                    onClick={handleCheck2}
                />
                <p2>I have read and understand the <a href="/">Terms & Conditions</a>*</p2>
                <div>
                    {errors.checkBox2Error
                        && (<p className="help is-danger">{errors.checkBox2Error}
                        </p>)}
                </div><br />

                <button
                    type="submit"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onSubmit = {handleSubmit}
                    style={{ backgroundColor: mouseOver ? "#85f089" : "#4CAF50" }}               
                >
                   Submit
                </button>
            </form>
        </div>
    );
}

export default Form;