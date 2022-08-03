import { Field } from "formik";
import React from "react";

const TextInput = ({ isError, placeholder, name }) => {
  console.log("isError :>", isError)
  return (
    <>
      <Field
        type="text"
        className={`${
          isError ? "!border-red-500" : null
        } border border-[#DBE4F2] mt-2 p-2 h-12 rounded text-sm focus:outline-none focus:border-[#142243] focus:ring-[#142243] block w-full sm:text-sm focus:ring-1`}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
      />
    </>
  );
};

export default TextInput;
