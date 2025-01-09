import { useEffect, useState } from "react";

export default function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        console.log('triggered')
        setValues(initialValues)
    }, [initialValues]) 

    const changeHandler = (e) => {

        const { name, value } = e.target;

        // ! add support for checkboxes !!
        setValues((preValues) => ({
            ...preValues,
            [name]: value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await submitCallback(values)

        setValues(initialValues)
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}