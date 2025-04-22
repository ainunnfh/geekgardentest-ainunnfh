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
        <div className="flex gap-2 ">
          <img src="Icon (7).png" alt="" className="w-8" />
          <p className="font-bold">Nexcent</p>
        </div>
        <p className="text-xs md:text-base">Copyright © 2020 Landify UI Kit.</p>

        <div className="flex justify-around mt-2 w-full">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.basketball.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaBasketballBall />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <Company />
      <Support />
    </div>
  );
};

export default FooterPage;
