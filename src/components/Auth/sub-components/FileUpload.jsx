import React, { useState } from "react";

const FileUpload = ({ label }) => {
  const [fileName, setFileName] = useState('');
  const id = label.toLowerCase().replace(/\s+/g, '-');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col grow items-start text-lg text-[#CDCDCD]">
      <label
        htmlFor={id}
        className={`${
          fileName ? 'text-black' : 'text-[#CDCDCD]'
        }`}
      >
        {fileName || label}
      </label>
      <div className="shrink-0 self-stretch mt-1 h-px border border-solid border-[#CDCDCD]" />
      
      <input
        type="file"
        id={id}
        name={id}
        className="sr-only"
        aria-label={label}
        onClick={handleFileChange}
      />
      
      <label
        htmlFor={id}
        className="px-8 py-2.5 mt-5 text-sm font-medium text-white whitespace-nowrap rounded-xl bg-slate-800 max-md:px-5 cursor-pointer"
      >
        Choose File
      </label>
    </div>
  );
};

export default FileUpload;