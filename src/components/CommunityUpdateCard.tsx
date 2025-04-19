import React from "react";

interface ICommunityUpdateCardProps {
  img: string;
  title: string;
}
const CommunityUpdateCard: React.FC<ICommunityUpdateCardProps> = (props) => {
  return (
    <div className="relative w-[300px] pt-16">
      <img
        src={props.img}
        alt="Safeguarding visual"
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="absolute left-1/2 bottom-[-32px] translate-x-[-50%] bg-white w-[90%] rounded-xl shadow-md p-4 text-center">
        <h3 className="text-[#717171] text-sm font-medium mb-2 leading-snug">
          {props.title}
        </h3>

        <a
          href="#"
          className="text-[#4CAF4F] text-sm font-semibold flex items-center justify-center gap-1 hover:text-[#4D4D4D]"
        >
          Readmore
          <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
};

export default CommunityUpdateCard;
