// ShopItems.js
import React, { useState} from "react";
import ShopItemCard from "../Item/ItemCard";
import Pagination from "../Pagination/Pagination";

const ShopItems = ({ items }) => {

  const cardsPerPage = 10; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of cards to display for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="ml-8 md:mx-30 sm:mx-20 my-8">
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-900">Available Products</h1>
      </div>

      <div className="grid grid-cols-2 gap-[15px] mx-8 md:mx-30 sm:mx-20 md:grid-cols-3 md:gap-[20px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {displayedItems.map((item) => (
          <ShopItemCard
            key={item.id}
            itemName={item.name}
            itemImage={item.image}
            soldItems={item.sold}
            itemRating={item.rating}
            price={item.price}
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
    </>
  );
};

export default ShopItems;
