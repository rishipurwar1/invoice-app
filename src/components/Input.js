import React from 'react'
import { useFormContext } from "react-hook-form";

const Input = ({ inputName, readOnly }) => {
    const { register } = useFormContext();
    return (
        <input {...(readOnly && { disabled: true, readOnly, value: 0 })} type="text" id={inputName} className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs" {...register(inputName, { required: true })} />
    )
}

export default Input
