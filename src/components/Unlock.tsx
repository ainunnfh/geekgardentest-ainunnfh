import React from "react";
import { Button } from "./ui/button";

const Unlock = () => {
  return (
    <div className="flex p-2 items-center justify-center md:p-6">
      <div className="w-1/4">
        <img src="Frame 35.png" alt="" className="md:scale-200" />
      </div>
      <div className="w-3/4 md:w-1/2 gap-1 md:justify-around flex flex-col">
        <div>
          <div className="font-semibold text-lg md:text-2xl text-[#4D4D4D]">
            The unseen of spending three <br /> years at Pixelgrade
          </div>
          <div className="text-[8px] md:text-base text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
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
