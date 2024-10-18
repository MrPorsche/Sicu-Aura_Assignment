import React from "react";

const FormInput = ({ placeholder, type = 'text', className = '' }) => {
  const id = placeholder.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={`flex flex-col flex-1 grow shrink-0 basis-0 w-full ${className}`}>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none focus:text-black placeholder:text-[#BCBCBC] font-medium"
        aria-label={placeholder}
      />
    </div>
  );
};

export default FormInput;