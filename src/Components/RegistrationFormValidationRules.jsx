function Validation(values) {
    // This function takes in object as an input and return anotherError object as output

    let errors = {};

    // Validate full name input

    if (!values.fullName) {
        errors.fullNameError = "Full name required!";

    } else if (values.fullName.length > 50) {
        errors.fullNameError = "Full name too long!";

    } else if (/\d/.test(values.fullName)) {
        errors.fullNameError = "Full name cannot contain numbers!";

    }

    // Validate username input

    if (!values.userName) {
        errors.userNameError = "Username required!";

    } else if (values.userName.length > 40) {
        errors.userNameError = "Username too long!";

    } else if (/\s/.test(values.userName)) {
        errors.userNameError = "Username cannot contain white space!";

    }

    //validate email input

    if (!values.email) {
        errors.emailError = "Email address is required";

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.emailError = "Email address is invalid!";

    }

    // Validate phone number input

    if (!values.phoneNum) {
        errors.phoneNumError = "Phone number is required";

    } else if (!/^[0-9]+$/.test(values.phoneNum)) {
        errors.phoneNumError = "Phone number cannot contain alphabets!";

    } else if (values.phoneNum.length > 18) {
        errors.phoneNumError = "Invalid Phone Number!";
    }

    // validate password input

    if (!values.password) {
        errors.passwordError = "Password is required";

    } else if (!/\d/.test(values.password)){
        errors.passwordError = "Password must contain at least 1 number!"

    } else if (!/[A-Z]/.test(values.password)){
        errors.passwordError = "Password must contain at least 1 upper case letter!"

    } else if(values.password.length < 8) {
        errors.passwordError = "Password must contain at least 8 characters!";
    }

    return errors;
}

export default Validation;