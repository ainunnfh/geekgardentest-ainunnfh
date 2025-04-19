import React from "react";
import { Button } from "./ui/button";

interface IUnlockProps {
  img: string;
  title1: string;
  title2?: string;
  desc: string;
}

const Unlock: React.FC<IUnlockProps> = (props) => {
  return (
    <div className="flex p-2 items-center justify-center md:p-6">
      <div className="w-1/4">
        <img src={props.img} alt="" className="md:scale-200" />
      </div>
      <div className="w-3/4 md:w-1/2 gap-1 md:justify-around flex flex-col">
        <div>
          <div className="font-semibold text-lg md:text-2xl text-[#4D4D4D]">
            {props.title1} <br />{" "}
            <span className="text-[#4CAF4F]">{props.title2}</span>
          </div>
          <div className="text-[8px] md:text-base text-[#717171]">
            {props.desc}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start -ml-6 md:hidden">
            <Button className="bg-[#4CAF4F] text-white scale-50">
              Learn More
            </Button>
          </div>

          <div className="hidden md:block">
            <Button className="bg-[#4CAF4F] text-white">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
