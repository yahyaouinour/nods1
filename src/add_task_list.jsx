export default function Add_task_list({ img, value }) {
  return (
    <div className="h-[1.625rem] w-fit px-[0.375rem] flex flex-row items-center opacity-75 cursor-pointer hover:bg-[#f5f5f5] hover:opacity-100">
      <div className="size-[0.8rem]">
        <img src={img} alt="icon" />
      </div>
      <div className="text-[#202020] ml-[0.375rem] text-[0.813rem] font-segoe-ui font-[600]">
        {value}
      </div>
      <div className="ml-[0.375rem] size-[0.5rem]">
        <img src="triangle_down.png" alt="icon" />
      </div>
    </div>
  );
}
