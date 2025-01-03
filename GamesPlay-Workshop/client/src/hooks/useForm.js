import { useState } from "react";

export default function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues)  

    const changeHandler = (e) => {

        const { name, value } = e.target;
        
        // ! add support for checkboxes !!
        setValues((preValues) => ({
            ...preValues,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values)
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}