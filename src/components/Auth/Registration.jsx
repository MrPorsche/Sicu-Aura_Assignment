import React, { useState } from 'react';
import hospitalIcon from "/hospital-icon.png";
import Login from './Login';
import SignUpForm from './sub-components/SignUpForm';


const FormHeader = ({ signedIn }) => {
    return (
        <div className="flex gap-5 justify-between max-w-full text-3xl w-[475px]">
            <img  loading="lazy" src={hospitalIcon} alt="Logo"
                  className="object-contain shrink-0 aspect-square w-[98px]" 
            />
            <div className="flex gap-2.5 my-auto">
              {signedIn ? (
                // If signedIn is true
                <>
                  <div className="font-medium text-[#CDCDCD]">Sign Up /</div>
                  <div className="font-semibold text-[#261E3B]">Login</div>
                </>
              ) : (
                // If signedIn is false
                <>
                  <div className="font-semibold text-[#261E3B]">Sign Up</div>
                  <div className="font-medium text-[#CDCDCD]">/ Login</div>
                </>
              )}
            </div>
        </div>
    );
};

const Registration = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <FormHeader signedIn={signedIn} />
        {signedIn ? <Login /> : <SignUpForm />}
        <p className="self-center mt-16 ml-3.5 text-sm text-stone-300 max-md:mt-10">
          Terms and Condition privacy policy
        </p>
      </form>
    </div>
  );
};

export default Registration;