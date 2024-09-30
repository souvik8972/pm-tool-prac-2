import { motion } from "framer-motion";
import React, { useState } from 'react';
import userLogo from "../../assets/avatars/User.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

const Header = ({ openMenu, setOpenMenu }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='flex justify-between items-center rounded-lg p-7 pt-2 pb-2 bg-[#e8e7e7] font-bold text-[#58595B] relative'>
            <span className='text-[3vw] md:text-[1.5rem] flex justify-center items-center gap-4'>
                <span onClick={() => setOpenMenu(!openMenu)} className='block lg:hidden'><GiHamburgerMenu /></span>
                MedTrix Project Management
            </span>
            <span>
                <img onClick={handleClick} src={userLogo} alt="user Logo" className='w-[3vw] cursor-pointer md:w-[2.5vw]' />
            </span>

            {/* Animated modal */}
            {showModal && (
                <motion.div
                    className="modal absolute right-1 top-14 flex flex-col justify-between w-[200px] h-[100px] rounded-md bg-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className='flex justify-center items-center gap-4 p-2 border-b-2'>
                        <img src={userLogo} alt="user Logo" className='w-[3vw] md:w-[2.5vw]' />
                        <span>Souvik Das</span>
                    </span>
                    <span className='text-center flex justify-center items-center gap-4 p-4'>
                        <IoMdLogOut /> logout
                    </span>
                </motion.div>
            )}
        </div>
    );
};

export default Header;
