import {useState} from 'react'

export const useInput = initialValue => {
    const [value, setValue] = useState('')
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue),
    ]
}