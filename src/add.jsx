export default function Add({ value, bg, color, img }) {
  return (
    <div className="h-[2.125rem] w-[16rem] pr-[0.625rem] pl-[0.4rem] flex flex-row items-center cursor-pointer hover:bg-[#f6efee] rounded-[0.25rem] transition-all duration-500 ease-in-out ">
      <div className={`size-[1.375rem] ${bg} rounded-full `}>
        <img src={img} alt="plus" />
      </div>
      <div
        className={`ml-[0.4rem] font-segoe-ui ${color} font-[600] text-[0.875rem]`}
      >
        {value}
      </div>
    </div>
  );
}
