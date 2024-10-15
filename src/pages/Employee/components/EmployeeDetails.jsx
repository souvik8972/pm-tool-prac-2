import React from 'react';
import { CiUser } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import ReusableTable from '../../../components/Table/Table';

const data=[
    {
        "project": "0841_KnowESR1.com - DDG implementation",
        "totalTasks": 1,
        "progress": "0 / 1",
        "actualHours": 0
    },
    {
        "project": "2025 Orserdu Omnichannel_Digital Tactical Planning",
        "totalTasks": 3,
        "progress": "0 / 3",
        "actualHours": 0
    },
    {
        "project": "Elzonris ASH 2024 Congress",
        "totalTasks": 3,
        "progress": "0 / 3",
        "actualHours": 0
    },
    {
        "project": "Elzonris Interactive Digital Aid",
        "totalTasks": 2,
        "progress": "0 / 2",
        "actualHours": 0
    },
    {
        "project": "Meetings and Discussions_Content Team",
        "totalTasks": 2,
        "progress": "0 / 2",
        "actualHours": 0
    },
    {
        "project": "Stemline_Project Management-Orserdu",
        "totalTasks": 9,
        "progress": "0 / 9",
        "actualHours": 0
    }
]

const columns = [
    {
      accessorKey: 'project', // Accessor key for the column
      header: 'Project', // Column header
    },
    {
      accessorKey: 'totalTasks', // Accessor key for the column
      header: 'Total Tasks', // Column header
    },
    {
      accessorKey: 'progress', // Accessor key for the column
      header: 'Progress', // Column header
    },
    {
      accessorKey: 'actualHours', // Accessor key for the column
      header: 'Actual Hours', // Column header
    }
  ];
  




const EmployeeDetails = () => {
    const navigate=useNavigate()
  return (
    <div className='w-full    flex   rounded-lg gap-4 '>
      <div className="left-side w-[35%]  flex flex-col p-4 shadow-lg rounded-xl border-2 relative bg-white">
        {/* back */}
        <div onClick={() => navigate(-1)} className=" absolute top-4 left-4 w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer p-1 hover:bg-gray-800 hover:text-white ">
            <IoMdArrowBack   />
  
        </div>
        <div className=" flex justify-center items-center flex-col gap-2 rounded-md  ">
          <div className="flex flex-col gap-3">
            <p className='w-full text-[90px] m-8'>
              <CiUser />
            </p>

            {/* name */}
            <p>Souvik Das</p>
            {/* designation */}
            <div className="w-full flex justify-center">
              <p className='bg-gradient-to-r from-[#eaeaea] to-[#0f0f0f] text-white w-fit p-3 text-base pt-0 pb-0 rounded-xl'>Software Developer</p>
            </div>
          </div>

          {/* task and project details */}
          <div className="flex justify-around items-center w-full mt-5">
            <div className="flex justify-center items-center gap-3 text-xl">
              <div className="p-3 bg-[#F9D2D3] rounded-lg text-red-600">
                <MdOutlineTaskAlt />
              </div>
              <div className="text-start text-lg">
                <p>39</p>
                <p>Total Tasks</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 text-xl">
              <div className="p-3 bg-[#F9D2D3] rounded-lg text-red-600">
                <BiTask />
              </div>
              <div className="text-start text-lg">
                <p>7</p>
                <p>Total Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="text-left flex justify-center items-center mt-10">
          <p className='border-b-2 pb-2 w-full pl-2'>Details</p>
        </div>

        {/* Additional Employee Details */}
        <div className=" flex justify-start items-start  flex-col text-base pl-3 gap-4 mt-2 ">
          <div><span>Name:</span> Abigail Adair</div>
          <div className='truncate'><span>Email:</span> abigail.adair@medtrixhealthcare.com</div>
          <div><span>Status:</span> <span className='bg-gradient-to-r from-green-400 to-green-950 text-white rounded-xl p-2 pt-0 pb-1 text-center text-sm '>Active</span></div>
          <div><span>Designation:</span> VP-Client Engagement</div>
          <div><span>Team:</span> PM Team</div>
          <div><span>Type:</span> PM_Employee</div>
        </div>

{/* button */}
<div className=" flex justify-center items-center gap-4 mt-10">
    <button className='bg-gradient-to-r from-[#D72426] to-[#750404] p-4 pt-2 pb-2 text-white  rounded-md transition-colors text-base '>Modify</button>
    <button className='bg-gradient-to-r from-[#D72426] to-[#750404] p-4 pt-2 pb-2 text-white  rounded-md transition-colors text-base'>Rate Card</button>
   
   
</div>




      </div>

      <div className="right-side w-[65%]  bg-white  shadow-lg border-2 rounded-xl h-full mr-4   ">
       <h5 className='p-4 bg-[#FFFFFF] rounded-xl text-start mb-2'> User's Projects List</h5>
    <div className=" w-full">
        <ReusableTable data={data} columns={columns} />
    </div>

      </div>
    </div>
  )
}

export default EmployeeDetails;
