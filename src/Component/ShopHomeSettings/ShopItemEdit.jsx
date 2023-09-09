import React from "react";
import StarRating from "../Rating/StarRating"; // Reusable star rating component
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const ShopItemEdit = ({
  key,
  itemName,
  itemImage,
  soldItems,
  availableItems,
  itemRating,
  price,
  onItemClick,
  onEdit, 
  onDelete,
}) => {
  const handleClick = () => {
    // Handle the click action, e.g., navigate to the item's details page
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <a
      href="/#"
      onClick={handleClick}
      className="rounded-lg p-4 shadow-lg border hover:opacity-80 "
    >
      
      <img
        src={itemImage}
        alt={itemName}
        className="w-full h-50 object-cover mb-2 rounded-lg border border-green-700"
      />
      <h3 className="sm:text-2xl text-lg font-semibold text-center mt-2">
        {itemName}
      </h3>
      <div className="flex items-center justify-center mt-2">
        <StarRating rating={itemRating} />
        <p className="text-gray-600 ml-2">{itemRating.toFixed(1)}</p>
      </div>
      <div>
      <p className="text-gray-600 text-center mt-2">Sold: {soldItems}</p>
      <p className="text-gray-600 text-center mt-2">Available: {availableItems}</p>
      <p className="text-green-500 font-semibold text-center text-xl mt-2">
        Rs.{price.toFixed(2)} /KG
      </p>
      </div>
      
      <div className="mt-4 flex justify-between">
        <div className="inline">
          <button 
          onClick={() => onEdit(key)}
          className=" text-[#3da749] hover:text-[#296b33] font-semibold px-3 py-1 rounded-full mr-2"
        >
          <PencilIcon className="w-5 h-5" />
        </button>
        </div>
        <div className="inline">
        <button
          onClick={() => onDelete(key)}
          className=" text-red-600 hover:text-red-900 font-semibold px-3 py-1 "
        >
          <TrashIcon className="w-5 h-5" /> {/* Delete icon */}
        </button>
        </div>
      </div>
    </a>
  );
};

export default ShopItemEdit;
