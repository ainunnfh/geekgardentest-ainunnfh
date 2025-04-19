import React from "react";

const Clients = () => {
  return (
    <div className="flex items-center justify-center flex-col p-3 gap-5">
      <div className="flex flex-col items-center gap-1">
        <div className="font-semibold text-[#4D4D4D] text-lg md:text-2xl">
          Our Clients
        </div>
        <div className="text-center text-xs text-[#717171] md:text-base">
          We have been working with some Fortune 500+ clients
        </div>
      </div>
      <div className="flex justify-around w-full md:w-3/4">
        <img src="Logo (1).png" alt="" />
        <img src="Logo (2).png" alt="" />
        <img src="Logo (3).png" alt="" />
        <img src="Logo (4).png" alt="" />
        <img src="Logo (5).png" alt="" />
        <img src="Logo (6).png" alt="" />
        <img src="Logo (7).png" alt="" />
      </div>
    </div>
  );
};

export default Clients;
