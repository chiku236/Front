import React from "react";

const Button = ({ text, isEnabled, type }) => {
  return (
    <>
      <button type={type} className={`${isEnabled ? "bg-[#1267FF]" : "bg-[#75A7FF]"} py-3 text-white rounded-full w-full`}>
        {text}
      </button>
    </>
  );
};

export default Button;
