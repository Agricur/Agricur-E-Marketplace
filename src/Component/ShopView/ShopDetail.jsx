import React from "react";
import StarRating from "../Rating/StarRating"; // Reusable star rating component

const ShopDetail = ({ shopName, shopImage, ratings, followers, motto }) => {
  return (
    <div className="flex justify-center my-8 ">
      <div className="flex flex-row gap-10 sm:gap-20 p-6 mx-6 md:mx-10 sm:mx-8 bg-white rounded-lg shadow-sm border border-green-600 opacity-95">
        <div>
          <img
            src={shopImage}
            alt={shopName}
            className="w-40 h-40 object-cover rounded-md border border-gray-700"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="sm:text-3xl text-xl font-bold">{shopName}</h2>
          <div className="flex items-center">
            <StarRating rating={ratings} />
            <p className="text-gray-600 ml-2">{ratings.toFixed(1)}</p>
          </div>
          <div>
            <p className="text-gray-600">{followers} Followers</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-1 rounded-full">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;