import React from "react";
import FormInput from "./sub-components/FormInput";

function LoginForm() {
  return (
    <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center mt-7 w-full text-lg max-md:mt-8 max-md:max-w-full">
        <form className="flex flex-col px-14 pt-10 pb-20 mt-24 bg-white border-2 border-solid border-neutral-200 rounded-[30px] shadow-[10px_10px_20px_rgba(0,0,0,0.15)] text-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-center text-2xl font-medium text-slate-800">
            Welcome to Sicu-aura
          </h2>
          <p className="mt-3 text-sm text-center">
            Your one stop safety solutions using innovative technology
          </p>

          {/* Updated to use FormInput component */}
          <div className="flex flex-col items-center mt-12 w-full gap-10 max-md:gap-8">
            <FormInput label="Hospital Name" type="text" placeholder="Hospital Name" />
            <FormInput label="Email ID" type="email" placeholder="Email ID" />
            <FormInput label="Password" type="password" placeholder="Password" />
            <FormInput label="Special Access Code" placeholder="Special Access Code" />
          </div>
        </form>

        <button className="px-14 py-3 mt-16 w-40 max-w-full font-semibold text-white whitespace-nowrap rounded-2xl bg-slate-800 max-md:px-5 max-md:mt-10">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;