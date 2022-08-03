import React from "react";

const Label = ({ text, isRequired }) => {
  return (
    <label
      className={`${
        isRequired
          ? 'after:content-["*"] after:ml-0.5 after:text-black'
          : null
      } text-sm mb-2`}
    >
      {text}
    </label>
  );
};

export default Label;
