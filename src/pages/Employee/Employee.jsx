import React from "react";
import { MaterialReactTable } from "material-react-table";
import data from "./employeeData.json";
import AddEmployee from "./components/AddEmployee";
import EmployeeHeader from "./components/EmployeeHeader";
import { motion } from "framer-motion";

const Employee = () => {
  const [showModal, setShowModal] = React.useState(false);
  const columns = [
    {
      header: "Avatar Initial",
      accessorKey: "avatar_initial",

      Cell: ({ cell }) => (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F9D2D3]">
          <span className="text-sm  text-red-600">{cell.getValue()}</span>
        </div>
      ),
    },
    {
      header: "Name",
      accessorKey: "text_body",
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

  const memoData = React.useMemo(() => data, []);

  return (
    <div className="p-4 bg-white rounded-sm   overflow-hidden ">
      <EmployeeHeader setShowModal={setShowModal} />
      <MaterialReactTable
        columns={columns}
        data={memoData}
        muiTableHeadProps={{
          sx: {
            backgroundColor: "#f0f0f0",
            borderBottom: "2px solid #ccc",
            color: "black", // Change color to black for better visibility
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor: "#F5F5F5",
            borderBottom: "2px solid #ccc",
          },
        }}
        enableStickyHeader
        paginationDisplayMode="pages"
        muiPaginationProps={{
          sx: {
            backgroundColor: "#F5F5F5",
            borderRadius: "20px",
            "& .Mui-selected": {
              backgroundImage: "linear-gradient(to right, red, black)",
              color: "white",
            },
          },
        }}
      />

      {/* add employee */}
      {showModal && (
        <div className="absolute z-50 bottom-0 w-screen h-screen right-0 top-0">
          {/* Background overlay with 20% opacity */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute z-30 bg-gray-500 opacity-45 w-screen h-screen"
          ></div>

          {/* Content with 100% opacity, positioned on the right */}
          <motion.div
            initial={{ x: "-100%" }} // Slide in from left
            animate={{ x: 0 }} // Slide to its original position
            exit={{ x: "100%" }} // Slide out to the right
            transition={{  stiffness: 300 }}
            className="absolute bg-white top-0 z-50 w-1/4 h-full"
          >
            <AddEmployee  setShowModal={setShowModal}/>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Employee;
