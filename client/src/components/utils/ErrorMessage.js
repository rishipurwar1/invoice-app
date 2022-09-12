import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <p className="text-red-500 text-center text-xs pt-2">{errorMessage}</p>
  );
};

export default ErrorMessage;
