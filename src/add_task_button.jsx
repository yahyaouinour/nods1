import React, { useState } from "react";

export default function Add_task_button({ img, value }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[1.625rem] w-fit px-[0.375rem] border border-[#e6e6e6] border-solid rounded-[0.375rem] flex flex-row items-center cursor-pointer hover:bg-[#f5f5f5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`size-[0.8rem] ${
          isHovered ? "opacity-100" : "opacity-70"
        } transition-opacity`}
      >
        <img src={img} alt="icon" />
      </div>
      <div
        className={`${
          value != "" ? "ml-[0.375rem]" : ""
        } text-[#666] text-[0.813rem] font-segoe-ui font-[400]`}
      >
        {value}
      </div>
    </div>
  );
}
