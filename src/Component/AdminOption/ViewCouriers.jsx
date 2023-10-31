import React, { useState } from 'react';

const ViewCouriers = () => {
  const [allCouriers, setAllCouriers] = useState([
    {
      name: 'Courier 1',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 2',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 3',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 4',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 5',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 6',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 7',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
    {
      name: 'Courier 8',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&usqp=CAU',
    },
  ]);
  const [selectedCourier, setSelectedCourier] = useState(null);

  const handleViewCourier = (courier) => {
    setSelectedCourier(courier);
  };

  const handleRemoveCourier = (courier) => {
    const updatedCouriers = allCouriers.filter((c) => c !== courier);
    setAllCouriers(updatedCouriers);
  };

  const handleCloseView = () => {
    setSelectedCourier(null);
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl text-center font-semibold mb-8">Couriers' List</h2>
      </div>

      {selectedCourier ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Viewing Courier: {selectedCourier.name}</h2>
          <button
            onClick={handleCloseView}
            className="hover:text-blue-700 text-blue-500 font-semibold px-3 py-1 mb-4"
          >
            Close View
          </button>
        </div>
      ) : (
        allCouriers.map((courier, index) => (
          <div
            key={index}
            className="bg-[#d9eada] hover:bg-[#eaede9] rounded-md shadow-md p-4 mb-4 mx-4 transition duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between mx-4">
              <div className="flex items-center">
                <img
                  src={courier.logoUrl}
                  alt={`${courier.name} Logo`}
                  className="w-12 h-12 mr-2 rounded-lg"
                />
                <p className="ml-5 text-lg font-bold">{courier.name}</p>
              </div>
              <div>
                <button
                  onClick={() => handleViewCourier(courier)}
                  className="hover:text-green-700 text-green-500 font-semibold px-3 py-1 mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemoveCourier(courier)}
                  className="text-red-500 hover:text-red-700 font-semibold px-3 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewCouriers;
