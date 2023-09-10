import image from "../../Images/hero.jpg";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import React from "react";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="border p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div className="col-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600">
              Available Quantity: {product.quantity}
            </p>
          </div>
          <p className="text-gray-600 mr-4">Total Sold: {product.totalSold}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onEdit(product.id)}
          className=" text-[#3da749] hover:text-[#296b33] font-semibold px-3 py-1 rounded-full mr-2"
        >
          <PencilIcon className="w-5 h-5" /> {/* Edit icon */}
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className=" text-red-600 hover:text-red-900 font-semibold px-3 py-1 rounded-full"
        >
          <TrashIcon className="w-5 h-5" /> {/* Delete icon */}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
