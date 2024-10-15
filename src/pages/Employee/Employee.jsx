import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import AddEmployee from "./components/AddEmployee";
import EmployeeHeader from "./components/EmployeeHeader";
import { motion } from "framer-motion";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ReusableTable from "../../components/Table/Table";
import {  useNavigate } from "react-router-dom";

const Employee = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // const [data, setData] = useState(null); // Set initial data to `null` to check if it's loaded
  const [loading, setLoading] = useState(true);
  
const data=[
  {
    "avatar_initial": "AA",
    "empId": "h114",
    "text_body": "Abigail Adair",
    "email": "abigail.adair@medtrixhealthcare.com",
    "role": "VP-Client Engagement",
    "team": "PM Team",
    "category": "PM_Employee",
    "joining_date": "06/05/2024",
    "status": "Active"
  },
  {
    "avatar_initial": "AA",
    "empId": "h107",
    "text_body": "AdminTest",
    "email": "test@medtrixhealthcare.com",
    "role": "Test engineer",
    "team": "PM Team",
    "category": "Admin",
    "joining_date": "03/01/2024",
    "status": "Active"
  },
  {
    "avatar_initial": "AB",
    "empId": "h9",
    "text_body": "Amita Byatnal",
    "email": "amita.b@medtrixhealthcare.com",
    "role": "Copy Editor",
    "team": "Content Team",
    "category": "Employee",
    "joining_date": "01/11/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "AD",
    "empId": "h115",
    "text_body": "Aditi Dash",
    "email": "aditi.d@medtrixhealthcare.com",
    "role": "Project Associate",
    "team": "PM Team",
    "category": "PM",
    "joining_date": "06/20/2024",
    "status": "Active"
  },
  {
    "avatar_initial": "AK",
    "empId": "h94",
    "text_body": "Ankit Kumar Singh",
    "email": "ankit.ks@medtrixhealthcare.com",
    "role": "Junior Software Engineer",
    "team": "Tech Team",
    "category": "Employee",
    "joining_date": "08/17/2023",
    "status": "InActive"
  },
  {
    "avatar_initial": "AK",
    "empId": "h111",
    "text_body": "Arun Krishnaraddi Hanchinal",
    "email": "arun.kh@medtrixhealthcare.com",
    "role": "Junior UI/UX Designer",
    "team": "Creative Team",
    "category": "Employee",
    "joining_date": "03/13/2024",
    "status": "Active"
  },
  {
    "avatar_initial": "AL",
    "empId": "h97",
    "text_body": "Abhyuday Lal",
    "email": "abhyuday.l@medtrixhealthcare.com",
    "role": "Junior Generalist",
    "team": "Creative Team",
    "category": "Employee",
    "joining_date": "08/24/2023",
    "status": "InActive"
  },
  {
    "avatar_initial": "AM",
    "empId": "h51",
    "text_body": "Arunkumar M",
    "email": "arunkumar.m@medtrixhealthcare.com",
    "role": "Senior E module Specialist",
    "team": "Creative Team",
    "category": "Employee",
    "joining_date": "03/27/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "AR",
    "empId": "h27",
    "text_body": "Avinash Ranchagi",
    "email": "avinash.r@medtrixhealthcare.com",
    "role": "Test Engineer",
    "team": "Tech Team",
    "category": "Employee",
    "joining_date": "03/03/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "AS",
    "empId": "h54",
    "text_body": "Akila S Raghavan",
    "email": "akila.sr@medtrixhealthcare.com",
    "role": "Medical Writer",
    "team": "Content Team",
    "category": "Employee",
    "joining_date": "03/27/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "AS",
    "empId": "h49",
    "text_body": "Anu Sibi",
    "email": "anu.s@medtrixhealthcare.com",
    "role": "HR Manager",
    "team": "PM Team",
    "category": "Employee",
    "joining_date": "03/27/2023",
    "status": "InActive"
  },
  {
    "avatar_initial": "AV",
    "empId": "h119",
    "text_body": "Ajit vasuki",
    "email": "ajit.vasuki@medtrixhealthcare.com",
    "role": "Copy Editor",
    "team": "Content Team",
    "category": "Employee",
    "joining_date": "07/08/2024",
    "status": "Active"
  },
  {
    "avatar_initial": "BB",
    "empId": "h34",
    "text_body": "Bidisha",
    "email": "bidisha.m@medtrixhealthcare.com",
    "role": "Project Manager",
    "team": "PM Team",
    "category": "PM",
    "joining_date": "03/20/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "BB",
    "empId": "h22",
    "text_body": "Binoj",
    "email": "binoj@medtrixhealthcare.com",
    "role": "Head operations",
    "team": "Finance Team",
    "category": "Admin",
    "joining_date": "02/27/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "BD",
    "empId": "h69",
    "text_body": "Bharathkumar Duragappa",
    "email": "bharath.kd@medtrixhealthcare.com",
    "role": "Software Engineer",
    "team": "Tech Team",
    "category": "Employee",
    "joining_date": "03/27/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "CS",
    "empId": "h24",
    "text_body": "Chandan Srikanth",
    "email": "chandan.s@medtrixhealthcare.com",
    "role": "Head-Technical Operations",
    "team": "Tech Team",
    "category": "PM_Employee",
    "joining_date": "03/03/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "CS",
    "empId": "h17",
    "text_body": "Chatur S Suryavamshi",
    "email": "chatur.ss@medtrixhealthcare.com",
    "role": "Software Engineer",
    "team": "Tech Team",
    "category": "Employee",
    "joining_date": "02/24/2023",
    "status": "InActive"
  },
  {
    "avatar_initial": "DA",
    "empId": "h41",
    "text_body": "Dattanand Anvekar",
    "email": "dattanand.a@medtrixhealthcare.com",
    "role": "Senior Motion Graphics Artist",
    "team": "Creative Team",
    "category": "Employee",
    "joining_date": "03/27/2023",
    "status": "Active"
  },
  {
    "avatar_initial": "DD",
    "empId": "h46",
    "text_body": "Divya",
    "email": "divya.s@medtrixhealthcare.com",
    "role": "Three Dimensional Generalist",
    "team": "Creative Team",
    "category": "PM_Employee",
    "joining_date": "03/27/2023",
    "status": "Active"
  }, {
      "avatar_initial": "AA",
      "empId": "h114",
      "text_body": "Abigail Adair",
      "email": "abigail.adair@medtrixhealthcare.com",
      "role": "VP-Client Engagement",
      "team": "PM Team",
      "category": "PM_Employee",
      "joining_date": "06/05/2024",
      "status": "Active"
    },
    {
      "avatar_initial": "AA",
      "empId": "h107",
      "text_body": "AdminTest",
      "email": "test@medtrixhealthcare.com",
      "role": "Test engineer",
      "team": "PM Team",
      "category": "Admin",
      "joining_date": "03/01/2024",
      "status": "Active"
    },
    {
      "avatar_initial": "AB",
      "empId": "h9",
      "text_body": "Amita Byatnal",
      "email": "amita.b@medtrixhealthcare.com",
      "role": "Copy Editor",
      "team": "Content Team",
      "category": "Employee",
      "joining_date": "01/11/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "AD",
      "empId": "h115",
      "text_body": "Aditi Dash",
      "email": "aditi.d@medtrixhealthcare.com",
      "role": "Project Associate",
      "team": "PM Team",
      "category": "PM",
      "joining_date": "06/20/2024",
      "status": "Active"
    },
    {
      "avatar_initial": "AK",
      "empId": "h94",
      "text_body": "Ankit Kumar Singh",
      "email": "ankit.ks@medtrixhealthcare.com",
      "role": "Junior Software Engineer",
      "team": "Tech Team",
      "category": "Employee",
      "joining_date": "08/17/2023",
      "status": "InActive"
    },
    {
      "avatar_initial": "AK",
      "empId": "h111",
      "text_body": "Arun Krishnaraddi Hanchinal",
      "email": "arun.kh@medtrixhealthcare.com",
      "role": "Junior UI/UX Designer",
      "team": "Creative Team",
      "category": "Employee",
      "joining_date": "03/13/2024",
      "status": "Active"
    },
    {
      "avatar_initial": "AL",
      "empId": "h97",
      "text_body": "Abhyuday Lal",
      "email": "abhyuday.l@medtrixhealthcare.com",
      "role": "Junior Generalist",
      "team": "Creative Team",
      "category": "Employee",
      "joining_date": "08/24/2023",
      "status": "InActive"
    },
    {
      "avatar_initial": "AM",
      "empId": "h51",
      "text_body": "Arunkumar M",
      "email": "arunkumar.m@medtrixhealthcare.com",
      "role": "Senior E module Specialist",
      "team": "Creative Team",
      "category": "Employee",
      "joining_date": "03/27/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "AR",
      "empId": "h27",
      "text_body": "Avinash Ranchagi",
      "email": "avinash.r@medtrixhealthcare.com",
      "role": "Test Engineer",
      "team": "Tech Team",
      "category": "Employee",
      "joining_date": "03/03/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "AS",
      "empId": "h54",
      "text_body": "Akila S Raghavan",
      "email": "akila.sr@medtrixhealthcare.com",
      "role": "Medical Writer",
      "team": "Content Team",
      "category": "Employee",
      "joining_date": "03/27/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "AS",
      "empId": "h49",
      "text_body": "Anu Sibi",
      "email": "anu.s@medtrixhealthcare.com",
      "role": "HR Manager",
      "team": "PM Team",
      "category": "Employee",
      "joining_date": "03/27/2023",
      "status": "InActive"
    },
    {
      "avatar_initial": "AV",
      "empId": "h119",
      "text_body": "Ajit vasuki",
      "email": "ajit.vasuki@medtrixhealthcare.com",
      "role": "Copy Editor",
      "team": "Content Team",
      "category": "Employee",
      "joining_date": "07/08/2024",
      "status": "Active"
    },
    {
      "avatar_initial": "BB",
      "empId": "h34",
      "text_body": "Bidisha",
      "email": "bidisha.m@medtrixhealthcare.com",
      "role": "Project Manager",
      "team": "PM Team",
      "category": "PM",
      "joining_date": "03/20/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "BB",
      "empId": "h22",
      "text_body": "Binoj",
      "email": "binoj@medtrixhealthcare.com",
      "role": "Head operations",
      "team": "Finance Team",
      "category": "Admin",
      "joining_date": "02/27/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "BD",
      "empId": "h69",
      "text_body": "Bharathkumar Duragappa",
      "email": "bharath.kd@medtrixhealthcare.com",
      "role": "Software Engineer",
      "team": "Tech Team",
      "category": "Employee",
      "joining_date": "03/27/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "CS",
      "empId": "h24",
      "text_body": "Chandan Srikanth",
      "email": "chandan.s@medtrixhealthcare.com",
      "role": "Head-Technical Operations",
      "team": "Tech Team",
      "category": "PM_Employee",
      "joining_date": "03/03/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "CS",
      "empId": "h17",
      "text_body": "Chatur S Suryavamshi",
      "email": "chatur.ss@medtrixhealthcare.com",
      "role": "Software Engineer",
      "team": "Tech Team",
      "category": "Employee",
      "joining_date": "02/24/2023",
      "status": "InActive"
    },
    {
      "avatar_initial": "DA",
      "empId": "h41",
      "text_body": "Dattanand Anvekar",
      "email": "dattanand.a@medtrixhealthcare.com",
      "role": "Senior Motion Graphics Artist",
      "team": "Creative Team",
      "category": "Employee",
      "joining_date": "03/27/2023",
      "status": "Active"
    },
    {
      "avatar_initial": "DD",
      "empId": "h46",
      "text_body": "Divya",
      "email": "divya.s@medtrixhealthcare.com",
      "role": "Three Dimensional Generalist",
      "team": "Creative Team",
      "category": "PM_Employee",
      "joining_date": "03/27/2023",
      "status": "Active"
    }
]
  const columns = [
    {
      header: "Avatar Initial",
      accessorKey: "avatar_initial",
      Cell: ({ cell }) => (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F9D2D3]">
          <span className="text-sm text-red-600">{cell.getValue()}</span>
        </div>
      ),
    },
    {
      header: "Name",
      accessorKey: "text_body",
      Cell:({row})=>{
        return <p onClick={()=>{navigate(`/employee/${row.original.empId}`)}} className="cursor-pointer">{row.original.text_body}</p>
      
      }
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Team",
      accessorKey: "team",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Joining Date",
      accessorKey: "joining_date",
    },
    {
      header: "Status",
      accessorKey: "status",
      Cell: ({ cell }) => {
        const status = cell.getValue();
        return (
          <span
            className={`px-2 py-1 rounded-full text-white ${
              status.toLowerCase() === "active"
                ? "bg-gradient-to-tr from-green-400 to-black"
                : "bg-gradient-to-tr from-gray-400 to-black"
            }`}
          >
            {status.toLowerCase() === "active" ? "Active" : "Inactive"}
          </span>
        );
      },
    },
  ];

  // Fetch data only once and memoize it
  useEffect(() => {
    if (!data) { 
      console.log("Fetching data...",data);
      // featchData();
    } else {
      setLoading(false); // Stop loading if data already exists
    }
  }, [data]);
  

  const featchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile");
      setData(response.data); // Store the fetched data
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Stop loading in case of error
    }
  };

  // Memoize the data to prevent re-fetching
  const memoizedData = useMemo(() => data, [data]);

  // Add Employee
  const addEmployee = (newEmployee) => {
    setData([...data, newEmployee]);
    setShowModal(false);
  };

  // Show loading spinner or message until data is fetched
  if (loading) {
    return <div><Loader line={10} /></div>;
  }

  return (
    <div className="p-4 w-full bg-white rounded-sm overflow-hidden">
      <EmployeeHeader setShowModal={setShowModal} />
    <ReusableTable columns={columns} data={memoizedData} />

      {/* Add employee modal */}
      {showModal && (
        <div className="absolute z-[1001] bottom-0 w-screen h-screen right-0 top-0">
          <div
            onClick={() => setShowModal(false)}
            className="absolute z-30 bg-gray-500 opacity-45 w-screen h-screen"
          ></div>

          <motion.div
            initial={{ x: "-100%" }} // Slide in from left
            animate={{ x: 0 }} // Slide to its original position
            exit={{ x: "100%" }} // Slide out to the right
            transition={{ stiffness: 300 }}
            className="absolute bg-white top-0 left-0 z-[100] w-[70%] md:w-[40%] lg:w-[30%] h-full"
          >
            <AddEmployee setShowModal={setShowModal} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Employee;
