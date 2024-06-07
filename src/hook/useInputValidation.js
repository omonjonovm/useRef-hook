import { useState } from "react"

const useInputValidation = initialValue => {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }
    const validate = () => {
        return value.search(/\d/) > - 0 ? true : false
    }
    const colorValidate = validate() ? 'text-danger' : null
    return { value, onChange, validate, colorValidate }
}
export default useInputValidation