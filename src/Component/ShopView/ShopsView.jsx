import React, { useState, useEffect } from "react";
import ShopCard from "./ShopCard";
import Shop from "../../Images/shop.jpg";
import Pagination from "../Pagination/Pagination";
import {server} from "../../server";


const Shopsview = () => {

  const [shopData,setShopData] = useState([]);
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

    
  useEffect(() => {
  
    fetch(`${server}/api/shop/getAllShops`, {
      method: "GET", 
    })
    .then((response) => response.json())
    .then((data) => {
      
      setShopData(data.shops);
    })

  }, []);

  return (
    <div>
  
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 ">Shops</h1>
      

      <div className="mt-32 grid grid-cols-2 gap-[15px] mx-8 md:mx-30 sm:mx-20 md:grid-cols-3 md:gap-[15px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {displayedShops.map((shop) => (
          <ShopCard
            shop_id={shop.shop_id}
            name={shop.shop_name}
            image= {shop.image}
            rating={5}
   
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
