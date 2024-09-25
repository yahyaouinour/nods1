import React, { useState } from "react";

export default function Add_task_expander({ expand, expand_state }) {
  const [isHovered, setIsHovered] = useState(false);
  const [img, setImg] = useState("add_red.png");
  const red_img = "add_red.png";
  const white_img = "add_white.png";

  const handleMouseEnter = () => {
    setIsHovered(true);
    setImg(white_img);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImg(red_img);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={expand}
      className={`h-[2rem] w-full pl-[0.25rem] bg-white flex flex-row items-center hover:cursor-pointer mb-[1rem] ${
        expand_state ? "hidden" : ""
      }`}
    >
      <div
        className={`size-[1.125rem] bg-white rounded-full flex items-center justify-center ${
          isHovered ? "bg-[#D1453B]" : "bg-white"
        }`}
      >
        <div className="size-[0.75rem]">
          <img src={img} alt="icon" />
        </div>
      </div>
      <div
        className={`ml-[0.75rem] text-[0.875rem] font-segoe-ui  ${
          isHovered ? "text-[#D1453B]" : "text-[#808080]"
        }`}
      >
        Add task
      </div>
    </div>
  );
}
