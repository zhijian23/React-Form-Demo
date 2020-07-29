function fullNameValidation(values) {

    let errors = {};

    if (!values.fullName) {
        errors.fullName = "Full name required!";

    } else if (values.fullName.length > 50) {
        errors.fullName = "Full name too long!";

    } else if (/\d/.test(values.fullName)) {
        errors.fullName = "Full name cannot contain numbers!";

    }

    return errors;
}

function userNameValidation(values) {
    let errors = {};

    if (!values.userName) {
        errors.userName = "Username required!";

    } else if (values.userName.length > 40) {
        errors.userName = "Username too long!";

    } else if (/\s/.test(values.userName)) {
        errors.userName = "Username cannot contain white space!";

    }

    return errors;
}

// this function expect an object as its parameter (values)
function emailValidation(values) {

    let errors = {}; //create errors object to store any possible error

    if (!values.email) {
        errors.email = "Email address is required";

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid!";

    }

    return errors;
}

function phoneNumValidation(values) {

    let errors = {}; //create errors object to store any possible error

    if (!values.phoneNum) {
        errors.phoneNum = "Phone number is required";

    } else if (!/^[0-9]+$/.test(values.phoneNum)) {
        errors.phoneNum = "Phone number cannot contain alphabets!";

    } else if (values.phoneNum.length > 18) {
        errors.phoneNum = "Invalid Phone Number!";
    }

    return errors;
}

function passwordValidation(values) {

    let errors = {}; //create errors object to store any possible error

    if (!values.password) {
        errors.password = "Password is required";

    } else if (!/\d/.test(values.password)){
        errors.password = "Password must contain at least 1 number!"

    } else if (!/[A-Z]/.test(values.password)){
        errors.password = "Password must contain at least 1 upper case letter!"

    } else if(values.password.length < 8) {
        errors.password = "Password must contain at least 8 characters!";
    }

    return errors;
}


export { emailValidation, userNameValidation, fullNameValidation, phoneNumValidation, passwordValidation };