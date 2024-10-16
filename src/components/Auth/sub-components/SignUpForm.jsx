import React from 'react';
import FormInput from './FormInput';
import FileUpload from './FileUpload';

const SignUpForm = () => {
  const inputClass = 'w-full'; // Consistent width class

  return (
    <>
      <div className="flex flex-wrap gap-10 mt-20 text-lg max-md:mt-10 max-md:max-w-full">
        <FormInput placeholder="Hospital Name" className={inputClass} />
        <FormInput placeholder="Email ID" className={inputClass} />
      </div>
      <div className="flex flex-wrap gap-10 mt-12 text-lg text-stone-300 max-md:mt-10 max-md:max-w-full">
        <FormInput placeholder="Address" className={inputClass} />
        <FormInput placeholder="Phone Number" className={inputClass} />
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="City" className={inputClass} />
            <FormInput placeholder="State" className={`mt-12 max-md:mt-10 ${inputClass}`} />
          </div>
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="Hospital Registration Number" className={inputClass} />
            <FormInput placeholder="Emergency-Ward Number" className={`mt-12 max-md:mt-10 ${inputClass}`} />
          </div>
        </div>
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="Pincode" className={inputClass} />
            <FormInput placeholder="Hospital Registration Date" className={`mt-12 max-md:mt-10 ${inputClass}`} />
            <FormInput placeholder="Number Of Ambulances Available" className={`mt-12 max-md:mt-10 ${inputClass}`} />
          </div>
          <div className="flex flex-col w-full max-md:w-full">
            <FileUpload />
            <FormInput placeholder="Create Password" className={`mt-12 max-md:mt-10 ${inputClass}`} type="password" />
            <FormInput placeholder="Confirm Password" className={`mt-12 max-md:mt-10 ${inputClass}`} type="password" />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="self-center px-11 py-3 mt-14 w-40 max-w-full text-lg font-semibold text-white rounded-2xl bg-slate-800 max-md:px-5 max-md:mt-10"
      >
        Sign Up
      </button>
    </>
  );
};

export default SignUpForm;