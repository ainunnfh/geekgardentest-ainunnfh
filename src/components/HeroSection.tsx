import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex p-5 items-center justify-center md:p-10">
        <div className="flex w-full max-w-7xl items-center md:mx-40 ">
          <div className="w-3/4 space-y-3">
            <h1 className="text-xl md:text-5xl font-semibold text-[#4D4D4D] md:leading-tight">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] text-[6px] md:text-base ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="bg-[#4CAF4F] text-white hover:cursor-pointer">
              Register
            </Button>
          </div>

          <div className="w-38 flex justify-end">
            <img src="/Illustration.png" alt="hero" className="md:scale-150" />
          </div>
        </div>
      </div>
      <div className="flex p-2 justify-center gap-2 md:mt-8">
        <span className="w-2 h-2 rounded-full bg-[#4CAF4F]"></span>
        <span className="w-2 h-2 rounded-full bg-[#E0E0E0]"></span>
        <span className="w-2 h-2 rounded-full bg-[#E0E0E0]"></span>
      </div>
    </div>
  );
};

export default HeroSection;
