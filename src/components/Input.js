import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputName, readOnly, type, total, appearance = false }) => {
  const { register, formState: errors } = useFormContext();
  return (
    <input
      {...(readOnly && { disabled: true, readOnly, value: total })}
      type={type}
      name={inputName}
      id={inputName}
      onChange={(e) => {
        // console.log(e.target.value);
      }}
      className={`${appearance && "appearance-none"} ${
        errors.errors[inputName]?.type === "required"
          ? "focus:outline-none focus:border-red-500"
          : "focus:outline-none focus:border-secondaryOne"
      } w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne transition text-white font-bold text-xs`}
      {...register(inputName, { required: true })}
    />
  );
};

export default Input;
