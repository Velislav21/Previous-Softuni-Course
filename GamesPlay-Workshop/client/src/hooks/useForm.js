import { useState } from "react";

export default function useForm(initialData) {

    const [formData, setFormData] = useState(initialData)  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefaul();

    }

    return {
        handleChange,
        submitHandler,
        formData
    }
}