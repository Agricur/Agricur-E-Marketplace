import React, { useState } from "react";
import ShopCard from "./ShopCard";
import Shop from "../../Images/shop.jpg";
import Pagination from "../Pagination/Pagination";

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
  {
    id: 11,
    name: "Purples Acres",
    image: Shop,
    rating: 4.0,
  },
];

const Shopsview = () => {
  const cardsPerPage = 10; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of cards to display for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedShops = shopData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(shopData.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="mx-8 md:mx-30 sm:mx-20 my-8">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-900">Shops</h1>
      </div>

      <div className="grid grid-cols-2 gap-[15px] mx-8 md:mx-30 sm:mx-20 md:grid-cols-3 md:gap-[15px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {displayedShops.map((shop) => (
          <ShopCard
            key={shop.id}
            name={shop.name}
            image={shop.image}
            rating={shop.rating}
          />
        ))}
      </div>

      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Shopsview;

// bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
