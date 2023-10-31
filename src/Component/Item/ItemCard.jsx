import React from "react";
import StarRating from "../Rating/StarRating"; // Reusable star rating component

const ItemCard = ({ itemName, itemImage, soldItems, itemRating, price, onItemClick }) => {
    const handleClick = () => {
      // Handle the click action, e.g., navigate to the item's details page
      if (onItemClick) {
        onItemClick();
      }
    };
  
    return (
      <Link to="#" onClick={handleClick} className="rounded-lg bg-slate-100 p-4 shadow border border-green-700 hover:bg-white 
      opacity-90 hover:opacity-100 dark:bg-slate-100 dark:border-green-700">
        <img src={itemImage} alt={itemName} className="w-full h-50 object-cover mb-2 rounded-lg border border-green-700" />
        <h3 className="sm:text-2xl text-lg font-semibold text-center mt-2">{itemName}</h3>
        <div className="flex items-center justify-center mt-2">
          <StarRating rating={itemRating} />
          <p className="text-gray-600 ml-2">{itemRating.toFixed(1)}</p>
        </div>
        <p className="text-gray-600 text-center mt-2">Sold: {soldItems}</p>
        <p className="text-green-500 font-semibold text-center text-xl mt-2">Rs.{price.toFixed(2)} /KG</p>
      </Link>
    );
  };
  
  export default ItemCard;