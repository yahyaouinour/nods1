export default function Add_task_submit({
  text,
  color,
  value,
  state,
  add,
  reset,
  task,
}) {
  const handleClick = () => {
    if (value == "Add task" && task.title !== "") {
      add();
      reset();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`h-[2rem] px-[0.75rem] rounded-[0.375rem] ${color} flex items-center cursor-pointer ${
        state === "" ? "cursor-default opacity-50" : ""
      }`}
    >
      <div className={`${text} text-[0.813rem] font-[600] font-segoe-ui`}>
        {value}
      </div>
    </div>
  );
}
