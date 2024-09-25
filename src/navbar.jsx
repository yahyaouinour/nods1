import Icon from "./icon";

export default function Navbar({ visible, trigger }) {
  return (
    <div className="max-h-[3.438rem] bg-white px-[0.75rem] flex flex-row items-center flex-grow justify-between">
      {!visible && (
        <div onClick={trigger}>
          <Icon img="public/sidebar.png" />
        </div>
      )}
      <div></div>
      <div className="flex flex-row">
        <Icon img="public/options.png" />
        <Icon img="public/message.png" />
        <Icon img="public/three_dots.png" />
      </div>
    </div>
  );
}
