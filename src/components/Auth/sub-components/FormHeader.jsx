import React from "react";
import hospitalIcon from "/hospital-icon.png";

const FormHeader = () => {
  return (
    <div className="flex gap-5 justify-between max-w-full text-3xl w-[475px]">
      <img 
        loading="lazy" 
        src={hospitalIcon}
        alt="Logo" 
        className="object-contain shrink-0 aspect-square w-[98px]" 
      />
      <div className="flex gap-2.5 my-auto">
        <div className="grow font-semibold text-slate-800">Sign Up</div>
        <div className="font-medium basis-auto text-stone-300">/ Login</div>
      </div>
    </div>
  );
};

export default FormHeader;