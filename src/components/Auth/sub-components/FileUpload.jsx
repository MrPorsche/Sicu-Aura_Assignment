import React from 'react';

const FileUpload = () => {
  const id = 'file-upload';
  return (
    <div className="flex flex-col grow items-start text-lg text-stone-300">
      <div className="shrink-0 self-stretch mt-1 h-px border border-solid border-stone-300" />
      <input
        type="file"
        id={id}
        name={id}
        className="sr-only"
        aria-label="File Upload"
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