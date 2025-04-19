import React from "react";

const Customer = () => {
  return (
    <div className="p-4 md:mx-40 flex items-center justify-center">
      <img
        src="customer-pict.png"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="3/4 flex flex-col text-[8px] text-[#717171] gap-1 md:text-base">
        <div className="">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </div>
        <div>
          <div className="font-semibold text-[#4CAF4F]">Tim Smith</div>
          <div className="text-[#89939E]">
            British Dragon Boat Racing Association
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1 w-3 md:w-10 md:gap-3">
            <img src="Logo (1).png" alt="" />
            <img src="Logo (2).png" alt="" />
            <img src="Logo (3).png" alt="" />
            <img src="Logo (4).png" alt="" />
            <img src="Logo (5).png" alt="" />
            <img src="Logo (6).png" alt="" />
            <img src="Logo (7).png" alt="" />
          </div>
          <a href="#" className="font-semibold text-[#4CAF4F]">
            Meet all customers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Customer;
