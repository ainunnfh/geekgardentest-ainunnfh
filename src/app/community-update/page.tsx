import CommunityUpdateCard from "@/components/CommunityUpdateCard";
import React from "react";

const CommunityUpdatePage = () => {
  return (
    <div className="p-6 md:mx-40">
      <div className="flex flex-col gap-2 items-center ">
        <div className="text-[#4D4D4D] text-lg md:text-2xl font-semibold">
          Caring is the new marketing
        </div>
        <div className="text-[#717171] text-[8px] text-center md:text-base">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&rsquo;s joining the
          community, read about how our community are increasing their
          membership income and lot&rsquo;s more.​
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <CommunityUpdateCard
          img="community-update-1.png"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <CommunityUpdateCard
          img="community-update-2.png"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <CommunityUpdateCard
          img="community-update-3.png"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </div>
  );
};

export default CommunityUpdatePage;
