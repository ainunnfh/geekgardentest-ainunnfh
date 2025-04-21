import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="p-2 ">
      <div className="w-full md:w-3/4 mx-auto flex items-center justify-between md:items-center md:gap-x-70">
        <div className="w-13 md:w-32">
          <img src="/Logo.png" alt="logo" />
        </div>
        <div className="flex items-center md:gap-5">
          <ul className="flex items-center gap-1 text-[8px] text-black md:text-lg md:gap-5 ">
            <li className="hover:cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#feature">Feature</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#community">Community</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#blog">Blog</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
          <Button className="bg-[#4CAF4F] p-1 text-white rounded hover:bg-green-500 hover:cursor-pointer">
            <a href="#register">Register Now</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
