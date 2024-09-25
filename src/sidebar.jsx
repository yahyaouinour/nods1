import Add from "./add";
import Profile from "./profile";
import Sidebar_element from "./sidebar_element";
import Sidebar_my_projects from "./sidebar_my_projects";
import React, { useState } from "react";

export default function Sidebar({ visible, trigger }) {
  const [clickedElement, setClickedElement] = useState("Inbox");

  const handleClick = (element) => {
    setClickedElement(element);
  };

  return (
    <div
      className={`${
        visible ? "w-[17.5rem]" : "w-[0rem] "
      } flex h-full flex-col items-center bg-[#faf8f7] transition-all duration-200 ease-in-out overflow-x-hidden`}
    >
      <Profile
        username="nour yahya"
        img="public/avatar (2).jpg"
        visible={visible}
        trigger={trigger}
      />
      <Add
        value={"Add task"}
        bg="bg-[#dc4c3e]"
        color="text-[#c3392c]"
        img="plus.png"
      />
      <div className="w-full py-[0.25rem] px-[0.75rem] flex flex-col items-center">
        <Sidebar_element
          value="Search"
          img="\public\search.png"
          img_focused="\public\search.png"
        />
        <Sidebar_element
          value="Inbox"
          img="\public\inbox.png"
          img_focused="\public\inbox_focus.png"
          state_change={() => handleClick("Inbox")}
          clicked={clickedElement}
        />
        <Sidebar_element
          value="Today"
          img="\public\today.png"
          img_focused="\public\today_focus.png"
          state_change={() => handleClick("Today")}
          clicked={clickedElement}
        />
        <Sidebar_element
          value="Upcoming"
          img="\public\upcoming.png"
          img_focused="\public\upcoming_focus.png"
          state_change={() => handleClick("Upcoming")}
          clicked={clickedElement}
        />
        <Sidebar_element
          value="Filters & Labels"
          img="\public\filters.png"
          img_focused="\public\filters_focus.png"
          state_change={() => handleClick("Filters & Labels")}
          clicked={clickedElement}
        />
        <Sidebar_my_projects value={"My Projects"} />
      </div>
      <div className="mt-auto mb-[0.5rem]">
        <Add
          value={"Add a team"}
          bg={"bg-[#ffffff]"}
          color={"text-[#666666]"}
          img=""
        />
      </div>
    </div>
  );
}
