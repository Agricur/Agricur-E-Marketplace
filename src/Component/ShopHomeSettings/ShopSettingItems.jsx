import React, { useState} from "react";
import ShopItemEdit from "./ShopItemEdit";
import Pagination from "../Pagination/Pagination";
import ProductImg from '../../Images/product_1.jpg';

const ShopItems = () => {

    
    const [shopItems, setShopItems] = useState([
        { id: 1, name: "Item 1", image: ProductImg, sold: 100, rating: 4.8, price: 20.99 },
        { id: 2, name: "Item 2", image: ProductImg, sold: 50, rating: 4.5, price: 15.49 },
        { id: 3, name: "Item 3", image: ProductImg, sold: 50, rating: 4.5, price: 13.49 },
        { id: 4, name: "Item 4", image: ProductImg, sold: 50, rating: 4.5, price: 11.49 },
        { id: 5, name: "Item 5", image: ProductImg, sold: 50, rating: 4.5, price: 14.49 },
        { id: 6, name: "Item 6", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
        { id: 7, name: "Item 7", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
        { id: 8, name: "Item 8", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
        { id: 9, name: "Item 9", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
        { id: 10, name: "Item 10", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
        { id: 11, name: "Item 11", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
        { id: 12, name: "Item 12", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
        { id: 13, name: "Item 13", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
        { id: 14, name: "Item 14", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },       

      ]);

      const handleRemoveItem = (item) => {
        const updatedShopItems = shopItems.filter((shopItem) => shopItem.id !== item.id);
        setShopItems(updatedShopItems);
      };
    

  const cardsPerPage = 8; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of cards to display for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedItems = shopItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(shopItems.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="md:mx-30 sm:mx-20 my-8">
        <h1 className="sm:text-4xl text-center text-2xl font-bold text-gray-900">Available Products</h1>
      </div>

      <div className="grid grid-cols-2 gap-[10px] mx-4 md:mx-8 sm:mx-6 md:grid-cols-2 md:gap-[12px] lg:grid-cols-4 lg:gap-[14px]">
        {displayedItems.map((item) => (
          <ShopItemEdit
            key={item.id}
            item = {item}
            itemName={item.name}
            itemImage={item.image}
            soldItems={item.sold}
            itemRating={item.rating}
            price={item.price}
            onRemoveItem={handleRemoveItem}
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
