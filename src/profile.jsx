import Icon from "./icon";

export default function Profile({ username, img, visible, trigger }) {
  return (
    <div className="h-[3.5rem] w-full p-[0.75rem] flex justify-center items-center">
      <div className="w-[16rem] h-full  flex flex-row justify-between">
        <div className="h-full flex flex-row items-center rounded-[0.5rem]  cursor-pointer hover:bg-[#f6efee]  transition-all duration-500 ease-in-out ">
          <div className="size-[1.625rem] mx-[0.35rem] rounded-full">
            <img className="rounded-full" src={img} alt="avatar" />
          </div>
          <div className="font-segoe-ui text-[#202020] font-[600] text-[0.875rem] ml-[0.25rem]">
            {username}
          </div>
          <div className="size-[0.6rem] mx-[0.5rem]">
            <img src="/public/down.png" alt="icon" />
          </div>
        </div>
        {visible && (
          <div className="h-full flex flex-row justify-between gap-2">
            <Icon img="public/bell.png" />
            <div onClick={trigger}>
              <Icon img="public/sidebar.png" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
