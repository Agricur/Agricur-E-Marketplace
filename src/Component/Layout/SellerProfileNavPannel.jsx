import React from "react";
import SellerProfilePhoto from "../../Images/SellerProfilePhoto.jpg";

const SellerNavPannel = () => {
  return (
    <div className="md:w-1/4 bg-white rounded-lg p-4 mx-8 shadow-md mb-4 md:mb-0">
      {/* Profile Photo */}
      <div className="rounded-full h-36 w-36 mx-auto">
        <img src={SellerProfilePhoto} alt="Profile Photo" />
      </div>

      {/* Buyer Name */}
      <h2 className="text-xl text-center font-semibold mt-4">Seller Name</h2>

      {/* Email Address */}
      <p className="text-gray-600 text-center text-sm mt-2">
        seller@example.com
      </p>

      {/* Navigation Bar */}
      <div className="rounded-lg shadow-md ml-4 mt-4">
        <ul className="space-y-2">
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Dashboard
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Products
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Couriers
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Edit Profile
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              My Cart
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              My Orders
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              My Payments
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Messages
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
            <a href="#" className="block">
              Shopping History
            </a>
          </li>
          <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749] text-red-600">
            <a href="#" className="block">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerNavPannel;
