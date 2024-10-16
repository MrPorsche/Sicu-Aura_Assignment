import React from "react";
import Background from "/bg.png";
import Logo from "/sicu-aura_logo.png";
import Slogan from "/sicu-aura_slogan.png";

const Banner = () => {
  return (
    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
      <div
            className="flex relative flex-col grow items-center px-20 py-60 font-semibold text-white min-h-[1024px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover', // Ensures the image covers the div
                backgroundPosition: 'center', // Centers the image
                position: 'relative' // To keep the layering intact
            }}
        >
        <img
            loading="lazy" src={Logo} alt="logo-image"
            className="object-contain max-w-full aspect-[0.84] w-[270px]" 
        />
        <img
            loading="lazy" src={Slogan} alt="slogan-image"
            className="object-contain max-w-full aspect-[4.29] w-[270px]"
        />
        <div className="flex flex-col items-center gap-10 mt-16">
            <h1 className="text-3xl font-semibold">Feel <span className="text-[#00D347]">Safe</span> Everywhere</h1>
            <p className="text-2xl font-medium">#Safe-<span className="text-[#00D347]">T</span>-Fast</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;