import React from "react";
import Logo from "/sicu-aura_logo.png";
import Logo2 from "/sicu-aura_logo-2.png";
import Auth from "./Auth/Auth";

const Home = () => {
  return (
    <section className="w-full Home">
        <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-4 row-span-2 flex-col items-start bg-[url('/bg.png')] bg-cover bg-center">
                <div className="w-full h-screen flex flex-col items-center justify-center gap-16">
                    <div className="flex flex-col items-center justify-center">
                        <img src={Logo} alt="sicu-aura-logo" className="w-[270px]" />
                        <img src={Logo2} alt="sicu-aura-logo" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <p className="text-[32px] text-white font-semibold">Feel <span className="text-[#00D347]">Safe</span> Everywhere</p>
                        <p className="text-[24px] text-white font-medium">#Safe-<span className="text-[#00D347]">T</span>-Fast</p>
                    </div>
                </div>
            </div>
            <Auth />
        </div>
    </section>
  )
}

export default Home;