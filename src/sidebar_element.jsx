export default function Sidebar_element({
  value,
  img,
  img_focused,
  state_change,
  clicked,
}) {
  return (
    <div
      onClick={state_change}
      className={`${
        clicked === value
          ? "bg-[#fee6e3] duration-0  text-[#a81f00]"
          : "hover:bg-[#f6efee]"
      } h-[2.125rem] w-[16rem] p-[0.375rem] mr-[0.125rem] flex flex-row items-center cursor-pointer  rounded-[0.25rem] transition duration-200 ease-in-out `}
    >
      <div className="size[1.5rem] ml-[0.125rem] rounded-full flex flex-row justify-center items-center">
        <div className="size-[1.25rem]">
          <img src={clicked === value ? img_focused : img} alt="icon" />
        </div>
      </div>
      <div className="font-segoe-ui  font-[400] text-[0.875rem] leading-[1rem] pl-[0.4rem]">
        {value}
      </div>
    </div>
  );
}
