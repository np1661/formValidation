export default function validation(values) {
    let errors = {};

    if(!values.username.trim()){
        errors.username = "username required";
    }

    if(!values.email.trim()){
        errors.email = "Email required";
    }
    else if(!/^([a-zA-Z0-9]+)@([a-zA-Z]+)([\.])([a-z]{2,5})$/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password.trim()){
        errors.password = "password is required";
    }
    else if(values.password.length < 6){
        errors.password = "password need to be 6 character or more"
    }

    if(!values.password1.trim()){
        errors.password1 = "password is required";
    }
    else if(values.password1 !== values.password){
        errors.password1 = "password do not match";
    }

    return errors;
}