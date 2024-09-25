import Content from "./content";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import React, { useState } from "react";
export default function App() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="h-dvh w-dvw flex flex-row overflow-x-hidden">
      <Sidebar trigger={handleClick} visible={visible} />
      <div className="flex-grow flex flex-col">
        <Navbar trigger={handleClick} visible={visible} />
        <Content />
      </div>
    </div>
  );
}
