import React, {useState} from "react";

const useForm = (validation) =>{
    
    const[values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password1: "",
    });

    const[errors,SetErrors] = useState({});

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setValues((preValues)=>{
            return{
                ...preValues,
                [name]:value,
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        SetErrors(validation(values));
    }
    return {handleChange, values, handleSubmit, errors}
    
}

export default useForm
