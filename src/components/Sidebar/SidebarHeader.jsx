import React, { useState } from "react";
import logo from "../../assets/avatars/Medtrixlogo.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const SidebarHeader = ({isOpen ,setIsOpen}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsOpen(pre=> !pre)
    console.log(isOpen)
  };

  return (
    <div className="flex w-full p-3 items-center relative ">
      <img src={logo} alt="Medtrix logo" className={`${ isCollapsed ? "block" : "w-0" } sm:h-[64px] h-[50px]   pl-7 transition-transform duration-300`} />
      <div
        onClick={handleToggleCollapse}
        className="text-3xl h-[2.3rem] w-[2.3rem] p-1 absolute top--[1.7rem] -right-4 flex justify-center items-center bg-white rounded-full cursor-pointer transition-transform duration-300"
      >
        <IoIosArrowDroprightCircle
          className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
