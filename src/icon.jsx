export default function Icon({img}) {
  return (
    <div className="size-[2rem] flex items-center justify-center cursor-pointer hover:bg-[#eeeceb]   rounded-[0.25rem] opacity-65 hover:opacity-100">
      <div className="size-[1.125rem]">
        <img src={img} alt="icon" />
      </div>
    </div>
  );
}
