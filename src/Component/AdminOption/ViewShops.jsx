import React, { useState } from 'react';
import StarRating from '../Rating/StarRating';

const ViewShops = () => {
  const [allShops, setAllShops] = useState([
    {
      name: 'Shop 1',
      logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
      rating: 4.5,
    },
    {
      name: 'Shop 2',
      logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
      rating: 3.8,
    },
    {
    name: 'Shop 3',
    logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
    rating: 3.0,
    },
    {
    name: 'Shop 4',
    logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
    rating: 3.2,
    },
    {
    name: 'Shop 5',
    logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
    rating: 4.0,
    },
    {
    name: 'Shop 6',
    logoUrl: 'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg',
    rating: 4.3,
    },
    // Add more shops here
  ]);
  const [selectedShop, setSelectedShop] = useState(null);

  const handleViewShop = (shop) => {
    setSelectedShop(shop);
  };

  const handleRemoveShop = (shop) => {
    const updatedShops = allShops.filter((s) => s !== shop);
    setAllShops(updatedShops);
  };

  const handleCloseView = () => {
    setSelectedShop(null);
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl text-center font-semibold mb-8">Shops List</h2>
      </div>

      {selectedShop ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Viewing Shop: {selectedShop.name}</h2>
          <p className="text-lg mb-2">Rating: {selectedShop.rating}</p>
          <button
            onClick={handleCloseView}
            className="hover:text-blue-700 text-blue-500 font-semibold px-3 py-1 mb-4"
          >
            Close View
          </button>
        </div>
      ) : (
        allShops.map((shop, index) => (
          <div
            key={index}
            className="bg-[#d9eada] hover:bg-[#eaede9] rounded-md shadow-md p-4 mb-4 mx-4 transition duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between mx-4">
              <div className="flex items-center">
                <img
                  src={shop.logoUrl}
                  alt={`${shop.name} Logo`}
                  className="w-12 h-12 mr-2 rounded-lg"
                />
                <div className='flex items-center'>
                    <p className="ml-5 text-lg font-bold">{shop.name} </p>
                    <p className='ml-4 mr-2'> Ratings:</p>
                    <StarRating rating={shop.rating} className="ml-1"/>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleViewShop(shop)}
                  className="hover:text-green-700 text-green-500 font-semibold px-3 py-1 mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemoveShop(shop)}
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

export default ViewShops;
