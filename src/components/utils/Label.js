import React from "react";

const Label = ({ labelName }) => {
  return (
    <label
      className="text-neutral block font-extralight text-xs pt-5 pb-2"
      htmlFor={labelName}
    >
      {labelName}
    </label>
  );
};

export default Label;
