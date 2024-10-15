import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className=" bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/clients">
            <button  className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gradient-to-tr from-red-500 to-red-900 hover:from-red-600 hover:to-red-700">
              Back to homepage
            </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default NotFound;
