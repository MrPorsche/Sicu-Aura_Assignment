import React from 'react';

const FormInput = ({ placeholder, type = 'text', className = '' }) => {
  const id = placeholder.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={`flex flex-col flex-1 grow shrink-0 basis-0 w-fit ${className}`}>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full border-b border-stone-300 focus:border-black focus:outline-none focus:text-black placeholder:text-stone-400"
        aria-label={placeholder}
      />
    </div>
  );
};

export default FormInput;