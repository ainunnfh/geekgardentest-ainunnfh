import React from "react";
import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <div className="p-2">
      <div className="text-center mb-5">
        <h2 className="text-lg md:text-2xl font-semibold text-[#4D4D4D]">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-xs md:text-base mt-2 text-[#717171]">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex gap-1 md:justify-around md:px-30">
        <CommunityCard
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
          icon="/icon.png"
        />
        <CommunityCard
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
          icon="/icon (1).png"
        />
        <CommunityCard
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
          icon="/icon (2).png"
        />
      </div>
    </div>
  );
};

export default Community;
