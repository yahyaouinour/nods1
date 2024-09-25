import React, { useState } from "react";
import Icon from "./icon";

export default function Tasks({ tasks, remove, complete, uncomplete }) {
  const [hovered, setHovered] = useState(null);
  const [iconHovered, setIconHovered] = useState(null);

  return (
    <ul>
      {tasks
        .slice()
        .reverse()
        .map((task, index) => (
          <li
            onMouseEnter={() => setIconHovered(index)}
            onMouseLeave={() => setIconHovered(null)}
            className="flex flex-row h-[4rem]"
            key={`${task.id}-${index}`}
          >
            <div className="h-full w-full flex flex-row py-[0.5rem] mt-[0.5rem] border-b-[0.0375rem] border-b-[#e6e6e6] cursor-pointer">
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="w-[1.125rem] h-[2rem]"
              >
                <div
                  className={`size-[1.25rem] border-[0.069rem] border-[#666666] rounded-full flex justify-center items-center  ${
                    task.isCompleted ? "bg-[#666666]" : ""
                  }`}
                >
                  <div
                    onClick={() => {
                      if (task.isCompleted) {
                        uncomplete(task.id);
                      } else {
                        complete(task.id);
                      }
                    }}
                    className={`size-[0.625rem] transition-opacity duration-200 ${
                      hovered === index && task.isCompleted === false
                        ? "opacity-100"
                        : "opacity-0"
                    }${task.isCompleted ? "opacity-100" : ""}`}
                  >
                    {task.isCompleted ? (
                      <img src="tick_white.png" alt="icon" />
                    ) : (
                      <img src="tick_gray.png" alt="icon" />
                    )}
                  </div>
                </div>
              </div>
              <div className="pl-[0.5rem] flex flex-col">
                <div
                  className={`leading-[1.313rem] text-[0.875rem] text-[#202020] font-segoe-ui ${
                    task.isCompleted ? "line-through" : ""
                  }`}
                >
                  {task.title}
                </div>
                <div className="leading-[1.125rem] text-[0.75rem] text-[#666666] font-segoe-ui">
                  {task.description}
                </div>
              </div>
            </div>
            <div
              onClick={() => remove(task.id)}
              className={`h-full flex items-center transition-opacity duration-200 ${
                iconHovered === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Icon img="delete.png" />
            </div>
          </li>
        ))}
    </ul>
  );
}
