import Company from "@/components/footer/Company";
import Support from "@/components/footer/Support";
import { FaInstagram } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import React from "react";

const FooterPage = () => {
  return (
    <div className="bg-[#263238] p-2 flex justify-around md:p-10">
      <div className="flex flex-col justify-around md:p-6">
        <div className="flex gap-2">
          <img src="Icon (7).png" alt="" />
          <p className="font-bold">Nexcent</p>
        </div>
        <p>Copyright © 2020 Landify UI Kit.</p>

        <div className="flex gap-2 mt-2">
          <FaInstagram />
          <FaBasketballBall />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <Company />
      <Support />
    </div>
  );
};

export default FooterPage;
