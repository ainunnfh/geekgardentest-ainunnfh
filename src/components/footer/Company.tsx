import React from "react";

const Company = () => {
  return (
    <div className="flex flex-col text gap-2">
      <h1 className="font-bold text-sm ">Company</h1>

      <ul className="text-xs text-[#F5F7FA] md:text-base">
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Company;
