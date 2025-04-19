import Achievements from "@/components/Achievements";
import React from "react";

const AchievementPage = () => {
  const data = [
    { icon: "/member.png", count: "2,245,341", desc: "Members" },
    { icon: "/booking.png", count: "828,867", desc: "Event Bookings" },
    { icon: "/club.png", count: "46,328", desc: "Clubs" },
    { icon: "/payment.png", count: "1,926,436", desc: "Payments" },
  ];

  return (
    <div className="bg-[#F5F7FA]">
      <div className=" p-2 flex items-center justify-center md:p-6 md:justify-around">
        <div className="">
          <h2 className="text-[#4D4D4D] text-md font-semibold mb-2 md:text-2xl">
            Helping a local <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-[#717171] text-[8px] md:text-base ">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            {data.slice(0, 2).map((item, index) => (
              <Achievements key={index} {...item} />
            ))}
          </div>
          <div className="">
            {data.slice(2).map((item, index) => (
              <Achievements key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;
