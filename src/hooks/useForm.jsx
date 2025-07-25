import { useState } from "react"

export const useForm = (initialValues, validations) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = ({ target }) => {
        setValues ({
            ...values,
            [target.name]: target.value
        })
        if (validations[target.name] && !validations[target.name].validation(target.value)) {
            setErrors({...errors, [target.name]: validations[target.name].errorText})
        } else {
            setErrors({...errors, [target.name]: undefined})
        }
    }

    const resetForm = () => setValues(initialValues)

    return ({
        values,
        errors,
        onChange,
        resetForm
    })
}