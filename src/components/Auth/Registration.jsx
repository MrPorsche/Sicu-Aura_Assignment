import React from "react";
import hospitalLogo from "/hospital-logo.png";

const Registration = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-28 py-12">
        <div className="w-full grid grid-cols-10">
            <div className="col-span-1">
                <img src={hospitalLogo} alt="hospital-icon" />
            </div>
            <div className="col-span-9 flex items-center justify-center border border-red-800">
                <p className="text-[30px] text-[#261E3B] font-semibold">Sign Up <span className="text-[#CDCDCD] cursor-pointer">/ Login</span></p>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Registration;