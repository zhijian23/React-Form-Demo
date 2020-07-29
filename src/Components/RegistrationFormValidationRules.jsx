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

    } else if (values.fullName.length > 40) {
        errors.userName = "Full name too long!";

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

    } else if (/w/.test(values.phoneNum)) {
        errors.phoneNum = "Please enter a valid phone number!";

    }else if (values.phoneNum.length > 18) {
        errors.userName = "Invalid Phone Number!";
    }
    
    return errors;
}

function passwordValidation(values) {

    let errors = {}; //create errors object to store any possible error

    if (!values.password) {
        errors.password = "Password is required";

    } else if (!/\S+@\S+\.\S+/.test(values.password)) {
        errors.password = "Password is invalid!";

    }

    return errors;
}


export { emailValidation, userNameValidation, fullNameValidation, phoneNumValidation, passwordValidation };