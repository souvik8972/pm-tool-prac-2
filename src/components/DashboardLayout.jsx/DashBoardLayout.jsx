import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AnimatePresence } from "framer-motion";


const DashBoardLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-[100vh] w-[100vw] flex relative   ">
      {/* Sidebar */}
      {/* lg:w-[18.6%] md:w-[20%]  */}
      <div  className={` absolute  h-full lg:relative shadow-md   ${isOpen ? "w-[20.6%] " : "w-[6%] "} transition-all duration-300  `}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */} 
      <div className={ `w-[100%]   bg-gray-100 p-7 pt-3  ${isOpen ? "w-[80.4%] sm:w-[100%l " : "w-[100%]"}} overflow-scroll`} >
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className=" h-[90%] text-black text-xl pt-10 text-center ">

        {children}
      </div >
       {/* footer */}
      
      </div>
    </div>
  );
};

export default DashBoardLayout;
