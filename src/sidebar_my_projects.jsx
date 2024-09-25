import Sidebar_element from "./sidebar_element";

export default function Sidebar_my_projects({ value }) {
  return (
    <div className="w-full mx-[0.75rem] mt-[1rem] flex flex-col items-center">
      <div className="flex h-[2.25rem] w-[16rem]  flex-row justify-between items-center pt-[0.25rem] hover:bg-[#f3efec]">
        <div className="h-[1.5rem] w-full pl-[0.25rem] text-[0.875rem] font-[600] font-segoe-ui text-[#666] cursor-pointer ">
          {value}
        </div>
        <div className="size-[0.83rem] mr-[0.5rem] cursor-pointer">
          <img src="down.png" alt="" />
        </div>
      </div>
      <Sidebar_element value="Home 🏡" img="public/hashtag.png" />
    </div>
  );
}
