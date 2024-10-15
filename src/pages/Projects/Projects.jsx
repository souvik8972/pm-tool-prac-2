import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ReusableTable from '../../components/Table/Table';

const Projects = () => {
  // State variables for managing modal visibility, data, and loading status
  const [showModal, setShowModal] = useState(false);
  // const [data, setData] = useState([]); 
  const data=[

      
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "0846",
      "project_name": "Elzonris hcp website interim updates",
      "client": "Stemline",
      "start_date": "09/13/24",
      "end_date": "10/22/24",
      "cost": "$0.00",
      "billing_amount": "$14,000.00",
      "last_updated": "09/17/24"
    },
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "034",
      "project_name": "Elzonris Patient Website Baselining_Internal",
      "client": "Internal",
      "start_date": "09/16/24",
      "end_date": "09/30/25",
      "cost": "$0.00",
      "billing_amount": "$0.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "033",
      "project_name": "Elzonris HCP Website Baselining_Internal",
      "client": "Internal",
      "start_date": "09/16/24",
      "end_date": "09/30/25",
      "cost": "$0.00",
      "billing_amount": "$0.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Completed",
      "client_code": "O",
      "project_id": "032",
      "project_name": "Orserdu Patient Website Baselining_Internal",
      "client": "Internal",
      "start_date": "09/16/24",
      "end_date": "09/30/25",
      "cost": "$0.00",
      "billing_amount": "$0.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Completed",
      "client_code": "O",
      "project_id": "031",
      "project_name": "Orserdu HCP Website Baselining_Internal",
      "client": "Internal",
      "start_date": "09/16/24",
      "end_date": "09/30/25",
      "cost": "$0.00",
      "billing_amount": "$0.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Completed",
      "client_code": "D",
      "project_id": "0846",
      "project_name": "Dr Erba Animated banners - Handoff to Targeted Oncs",
      "client": "Stemline",
      "start_date": "09/05/24",
      "end_date": "09/06/24",
      "cost": "$0.00",
      "billing_amount": "$1,000.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Active",
      "client_code": "S",
      "project_id": "0841",
      "project_name": "SABCS| Marriott Riverwalk Cling",
      "client": "Stemline",
      "start_date": "09/16/24",
      "end_date": "10/14/24",
      "cost": "$0.00",
      "billing_amount": "$2,500.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Active",
      "client_code": "S",
      "project_id": "0841",
      "project_name": "SABCS| Marriott Window Cling 2",
      "client": "Stemline",
      "start_date": "09/16/24",
      "end_date": "10/14/24",
      "cost": "$0.00",
      "billing_amount": "$2,500.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Completed",
      "client_code": "S",
      "project_id": "0841",
      "project_name": "SABCS| Marriott Window Cling 1",
      "client": "Stemline",
      "start_date": "09/16/24",
      "end_date": "10/14/24",
      "cost": "$0.00",
      "billing_amount": "$2,500.00",
      "last_updated": "09/16/24"
    },
    {
      "status": "Active",
      "client_code": "O",
      "project_id": "0841",
      "project_name": "Orserdu DTP website - Updating the Thumbnail of Nicola Video (MAT-US-ELA-00319)",
      "client": "Stemline",
      "start_date": "09/16/24",
      "end_date": "10/16/24",
      "cost": "$0.00",
      "billing_amount": "$5,000.00",
      "last_updated": "09/13/24"
    },
    {
      "status": "Active",
      "client_code": "O",
      "project_id": "0841",
      "project_name": "Orserdu BCAM e-Mail 2 (MAT-US-DS-00189)",
      "client": "Stemline",
      "start_date": "09/09/24",
      "end_date": "10/01/24",
      "cost": "$0.00",
      "billing_amount": "$3,300.00",
      "last_updated": "09/11/24"
    },
    {
      "status": "Active",
      "client_code": "M",
      "project_id": "0841",
      "project_name": "MORE Campaign Direct Mailer 3 (MAT-US-ELA-00520)",
      "client": "Stemline",
      "start_date": "09/10/24",
      "end_date": "10/10/24",
      "cost": "$0.00",
      "billing_amount": "$1,000.00",
      "last_updated": "09/11/24"
    },
    {
      "status": "Completed",
      "client_code": "S",
      "project_id": "846",
      "project_name": "SEO implementation on Elzonris websites",
      "client": "Stemline",
      "start_date": "07/01/24",
      "end_date": "11/28/24",
      "cost": "$0.00",
      "billing_amount": "$5,000.00",
      "last_updated": "09/10/24"
    },
    {
      "status": "Active",
      "client_code": "C",
      "project_id": "XXX",
      "project_name": "CSL Behring_US_2D graphic video",
      "client": "CSL Behring",
      "start_date": "09/04/24",
      "end_date": "10/15/24",
      "cost": "$0.00",
      "billing_amount": "$40,250.00",
      "last_updated": "09/09/24"
    },
    {
      "status": "Active",
      "client_code": "C",
      "project_id": "XXX",
      "project_name": "CSL Behring_US_Digital Interactive Infographic",
      "client": "CSL Behring",
      "start_date": "09/04/24",
      "end_date": "10/15/24",
      "cost": "$0.00",
      "billing_amount": "$43,700.00",
      "last_updated": "09/09/24"
    },
    {
      "status": "Active",
      "client_code": "A",
      "project_id": "0891",
      "project_name": "AbbVie_Rinvoq GCA - Project management",
      "client": "AbbVie",
      "start_date": "08/20/24",
      "end_date": "12/23/24",
      "cost": "$0.00",
      "billing_amount": "$8,820.00",
      "last_updated": "09/04/24"
    },
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "0846",
      "project_name": "Elzonris AIM XR- Dr. Erba home office email 6",
      "client": "Stemline",
      "start_date": "09/04/24",
      "end_date": "10/04/24",
      "cost": "$0.00",
      "billing_amount": "$2,310.00",
      "last_updated": "09/04/24"
    },
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "0846",
      "project_name": "Elzonris AIM XR- Dr Erba home office email 3",
      "client": "Stemline",
      "start_date": "09/04/24",
      "end_date": "10/04/24",
      "cost": "$0.00",
      "billing_amount": "$2,310.00",
      "last_updated": "09/04/24"
    },
    {
      "status": "Active",
      "client_code": "E",
      "project_id": "0846",
      "project_name": "Elzonris AIM XR S1HM3",
      "client": "Stemline",
      "start_date": "09/04/24",
      "end_date": "10/04/24",
      "cost": "$0.00",
      "billing_amount": "$2,310.00",
      "last_updated": "09/04/24"}
  
  
]
// Holds the project data
  const [loading, setLoading] = useState(false); // Loading state for when data is being fetched
  const navigate = useNavigate(); // Used for navigating to other routes

  // Define table columns
  const columns = [
    {
      header: "Status",
      accessorKey: "status", // Accessor key for the "status" field in data
      Cell: ({ row }) => ( // Custom cell rendering for the "Status" column
        <div className="flex items-center gap-2 text-xl">
          <MdDeleteOutline 
            className='cursor-pointer' 
            onClick={() => handleDelete(row.original.project_id)} // Call delete handler on icon click
          />
          {/* Dynamic styling based on the project's status */}
          <p className={`text-sm pr-2 pl-2 rounded-xl ${row.original.status === "Active" ? "bg-[#D7F5FC] text-[#37d4ff]" : "bg-gradient-to-r from-[#36AF46] to-[#023A04] text-white"}`}>
            {row.original.status}
          </p>
        </div>
      ),
    },
    {
      header: "Project Details",
      accessorKey: "project_name", // Accessor key for the "project_name" field
      Cell: ({ row }) => ( // Custom rendering for project details
        <div className="flex items-center">
          {/* Clicking the circle navigates to project-specific details */}
          <div 
            onClick={() => navigate(`/project-wise/${row.original.project_id}`)} 
            className="cursor-pointer p-5 text-center w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mr-2"
          >
            {row.original.client_code}
          </div>
          <div>
            <p className='text-base'>{row.original.project_name}</p>
            <p className='text-sm text-gray-400'>Client: {row.original.client}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Start Date",
      accessorKey: "start_date", // Start date of the project
    },
    {
      header: "End Date",
      accessorKey: "end_date", // End date of the project
    },
    {
      header: "Outsource Value",
      accessorKey: "cost", // Outsource cost for the project
    },
    {
      header: "Total Value",
      accessorKey: "billing_amount", // Total billing amount
    },
    {
      header: "Last Updated",
      accessorKey: "last_updated", // Last updated timestamp
    },
  ];

  // Fetch project data when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projects'); // Make API call
      setData(response.data); // Set the data fetched from the API
    } catch (error) {
      console.error('Error fetching data:', error); // Handle error
      // Show error notification here (if needed)
    } finally {
      setLoading(false); // Set loading to false once data is fetched or an error occurs
    }
  };

  // Function to handle project deletion
  const handleDelete = async (projectId) => {
    alert('Delete project: ' + projectId); // Show alert when a project is deleted
    // You can add logic to call an API to delete the project here
  };

  // Memoize the data to avoid unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);

  // Show a loader while the data is being fetched
  if (loading) {
    return <Loader line={10} />;
  }

  return (
    <div className="p-4 bg-white rounded-sm overflow-hidden">
      <h2 className="mb-4 text-xl border-b pb-2 text-left">Projects List</h2>
      {/* Use ReusableTable to display the data */}
      <ReusableTable columns={columns} data={memoizedData} />
    </div>
  );
};

export default Projects;
