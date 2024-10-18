import React from "react";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";

const SignUpForm = () => {
  const inputClass = 'w-full'; // Consistent width class

  return (
    <>
      <div className="flex flex-wrap gap-10 mt-20 text-lg max-md:mt-10 max-md:max-w-full">
        <FormInput placeholder="Hospital Name" type="text" className={inputClass} required/>
        <FormInput placeholder="Email ID" type="email" className={inputClass} required />
      </div>
      <div className="flex flex-wrap gap-10 mt-12 text-lg text-[#CDCDCD] max-md:mt-10 max-md:max-w-full">
        <FormInput placeholder="Address" type="test" className={inputClass} required />
        <FormInput placeholder="Phone Number" type="tel" className={inputClass} required />
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="City" type="text" className={inputClass} required />
            <FormInput placeholder="State" type="text" className={`mt-12 max-md:mt-10 ${inputClass}`} />
          </div>
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="Hospital Registration Number" type="number" className={inputClass} required />
            <FormInput placeholder="Emergency-Ward Number" type="number" className={`mt-12 max-md:mt-10 ${inputClass}`} required />
          </div>
        </div>
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:w-full">
            <FormInput placeholder="Pincode" type="number" className={inputClass} required />
            <FormInput placeholder="Hospital Registration Date" type="date" className={`mt-12 max-md:mt-10 ${inputClass}`} required />
            <FormInput placeholder="Number Of Ambulances Available" type="number" className={`mt-12 max-md:mt-10 ${inputClass}`} />
          </div>
          <div className="flex flex-col w-full max-md:w-full">
            <FileUpload label="Registration Certificate Upload" required />
            <FormInput placeholder="Create Password" className={`mt-12 max-md:mt-10 ${inputClass}`} type="password" required />
            <FormInput placeholder="Confirm Password" className={`mt-12 max-md:mt-10 ${inputClass}`} type="password" required />
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