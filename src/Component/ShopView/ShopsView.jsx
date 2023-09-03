import React from "react";
import ShopCard from "./ShopCard";
import Shop from "../../Images/shop.jpg";


// Shops content
const shopData = [
  {
    id: 1,
    name: "Farmers Market",
    image: Shop,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Green Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 4,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 7,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 9,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
  {
    id: 10,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
];

const Shopsview = () => {
  return (
    <div>
        
      <div className="ml-16 md:mx-30 sm:mx-20 my-8">
        <h1 className="text-4xl font-bold text-gray-900">Shops</h1>
      </div>

      {/* <div className="bg-[#3da749] my-8 mx-4 md:mx-15 sm:mx-10 justify-center p-8 rounded-lg sm:px-10 border border-gray-700
        shadow dark:border-green-700 "> */}
        <div className="grid grid-cols-1 gap-[15px] mx-16 md:mx-30 sm:mx-20 md:grid-cols-2 md:gap-[15px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {shopData.map((shop) => (
            <ShopCard
              key={shop.id}
              name={shop.name}
              image={shop.image}
              rating={shop.rating}
            />
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Shopsview;


// bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">