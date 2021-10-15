import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputName, readOnly, type, total, bgColor }) => {
  const { register, formState: errors } = useFormContext();
  return (
    <input
      {...(readOnly && { disabled: true, readOnly, value: total })}
      type={type}
      name={inputName}
      id={inputName}
      {...register(inputName, { required: true })}
      className={`w-full bg-${bgColor ? bgColor : "primaryOne"} ${
        errors.errors[inputName]?.type === "required"
          ? "focus:outline-none focus:border-red-500"
          : "focus:outline-none focus:border-secondaryTwo"
      } p-3 rounded-md shadow-md border focus:outline-none  border-borderOne transition text-white font-bold text-xs`}
    />
  );
};

export default Input;
