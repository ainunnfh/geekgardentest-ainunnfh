import React from "react";

interface AchievementsProps {
  icon: string;
  count: string;
  desc: string;
}

const Achievements: React.FC<AchievementsProps> = (props) => {
  return (
    <div className="p-2 flex">
      <div className="text-[#4D4D4D] flex items-center justify-center gap-1">
        <div>
          <img src={props.icon} alt="" className="w-8 md:w-14" />
        </div>
        <div>
          <div className="font-bold text-sm md:text-xl">{props.count}</div>
          <div className="font-light text-xs md:text-md text-[#717171]">
            {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
