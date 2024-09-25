import Add_task_button from "./add_task_button";
import Add_task_expander from "./add_task_expander";
import Add_task_list from "./add_task_list";
import Add_task_submit from "./add_task_submit";
import { useState } from "react";

export default function Add_task({ add, newTask, setNew }) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(true);
  };

  const handleTitleChange = (e) => {
    setNew({ ...newTask, title: e.target.value, isCompleted: false });
  };

  const handleDescriptionChange = (e) => {
    setNew({ ...newTask, description: e.target.value });
  };

  const handleAddTask = () => {
    if (newTask.title !== "") {
      add();
      setNew({ title: "", description: "" });
    }
  };

  return (
    <>
      <Add_task_expander expand={handleExpand} expand_state={expand} />
      {expand && (
        <div className="w-full  pr-[0.625rem] pt-[0.5rem] bg-white border border-[#e6e6e6] border-solid rounded-[0.625rem] flex flex-col">
          <input
            value={newTask.title}
            onChange={handleTitleChange}
            type="text"
            className="pl-[0.625rem] focus:border-none focus:outline-none h-[1.443rem] text-[0.875rem] placeholder:text-[#999] text-[#202020] placeholder:font-segoe-ui font-segoe-ui placeholder:font-[600] font-[600]"
            placeholder="Task name"
          />
          <input
            value={newTask.description}
            onChange={handleDescriptionChange}
            type="text"
            className="pl-[0.625rem] focus:border-none focus:outline-none pt-[0.25rem] h-[1.344rem] leading-[1.65] text-[0.813rem] placeholder:text-[#999] text-[#202020] placeholder:font-segoe-ui font-segoe-ui placeholder:font-[400] font-[600]"
            placeholder="Description"
          />
          <div className="pl-[0.625rem] mt-[1rem] flex flex-row gap-[0.5rem]">
            <Add_task_button img="deadline.png" value="Due date" />
            <Add_task_button img="flag.png" value="Priority" />
            <Add_task_button img="reminder.png" value="Reminders" />
            <Add_task_button img="filled_three_dots.png" value="" />
          </div>
          <div className="pl-[0.625rem] w-full h-[3rem] mt-[0.75rem] flex flex-row items-center border border-t-1 justify-between">
            <Add_task_list img="inbox.png" value="Inbox" />
            <div className="flex flex-row gap-[0.5rem]">
              <Add_task_submit
                text="text-[#202020]"
                color="bg-[#f5f5f5]"
                value="Cancel"
              />
              <Add_task_submit
                text="text-[#fff]"
                color="bg-[#dc4c3e]"
                value="Add task"
                add={add}
                reset={() => setNew({ title: "", description: "" })}
                task={newTask}
                enterkey={handleAddTask}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
