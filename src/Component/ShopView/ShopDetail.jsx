import React from "react";
import StarRating from "../Rating/StarRating"; 

const ShopDetail = ({ shopName, shopImage, ratings, followers, motto }) => {
  return (
    <div className="flex justify-center ">
      <div className=" mt-36 flex flex-row gap-10 sm:gap-20 p-6 mx-6 md:mx-10 sm:mx-8 bg-white rounded-lg shadow-sm border border-green-600 opacity-95">
        <div>
          <img
            src={shopImage}
            alt={shopName}
            className="w-40 h-40 object-cover rounded-md border border-gray-700"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="sm:text-3xl text-xl font-bold">{shopName}</h2>
          <p className="text-gray-600">{motto}</p>
          <div className="flex items-center">
            <StarRating rating={ratings} />
            <p className="text-gray-600 ml-2">{ratings.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
