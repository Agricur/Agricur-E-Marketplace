import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopCourierSection = () => {
  const [currentCourier, setCurrentCourier] = useState({
    name: "Courier Name",
    // Add more courier details here
  });

  const removeCurrentCourier = () => {
    setCurrentCourier({});
  };

  // Sample data for all couriers in the system
  const allCouriers = [
    {
      name: "Courier 1",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU",
    },
    {
      name: "Courier 2",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU",
    },
    // Add more couriers here
  ];

  const handleClick = () => {};

  const addCourier = () => {};

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <Link to="#" onClick={handleClick}>
        <div className="mb-4">
          {/* Display the current courier card if there is a current courier */}
          {currentCourier.name && (
            <div className="bg-[#d9eada] hover:bg-[#b9dbb7] rounded-md shadow-md p-4 mb-4 transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">Current Courier</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hZfddOzK3vcA4iWkrWEkmtHXfgzw_iFxjg&usqp=CAU"
                    alt="Courier Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <p>{currentCourier.name}</p>
                </div>
                <button
                  onClick={removeCurrentCourier}
                  className="text-red-600 hover:text-red-900 font-semibold px-3 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Add a new courier section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Add a New Courier</h3>
        <p className="mb-5 text-red-400">
          NOTE - If you want to add a new courier, first remove the current courier. 
             
        </p>

        {allCouriers.map((courier, index) => (
          <div className="bg-white hover:bg-[#eaede9] rounded-md shadow-md p-4 mb-4 transition duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={courier.logoUrl}
                  alt={`${courier.name} Logo`}
                  className="w-8 h-8 mr-2 "
                />
                <p>{courier.name}</p>
              </div>
              <div>
              <button
                  onClick={handleClick}
                  className="hover:text-blue-700 text-blue-500 font-semibold px-3 py-1 "
                >
                  View
                </button>
                <button
                  onClick={removeCurrentCourier}
                  className="text-[#3da749] hover:text-[#296b33] font-semibold px-3 py-1 mr-2"
                >
                  Add
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCourierSection;
