import React from "react";
interface ICommunityCardProps {
  icon: string;
  title: string;
  description: string;
}

const CommunityCard: React.FC<ICommunityCardProps> = (props) => {
  return (
    <div className="bg-white shadow-md rounded-md aspect-square w-32 md:w-52 flex flex-col items-center justify-center text-center text-black p-2 gap-1 md:gap-2">
      <div className="md:scale-150 flex items-center justify-center">
        <img
          src={props.icon}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="font-bold text-[#4D4D4D] text-xs md:text-xl">
        {props.title}
      </div>
      <div className="text-[8px] text-[#717171] md:text-sm">
        {props.description}
      </div>
    </div>
  );
};

export default CommunityCard;
