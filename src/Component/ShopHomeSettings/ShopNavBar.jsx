import React from "react";
import profilePhoto from '../../Images/Logo.png';
import { Link } from "react-router-dom";

const ShopNav = () => {
    return (
        <div className="md:w-1/4 bg-white h-fit rounded-lg p-4 m-2 md:mx-8 shadow-md mb-4 md:mb-0 ">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            <img src={profilePhoto} alt="Profile" />
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Shop Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">shopname@example.com</p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md items-center mt-4">
            <ul className="space-y-2">
            <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Dashboard</Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Edit Shop </Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Products</Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Couriers</Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Messages</Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Order History</Link>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <Link to="/#" className="block">Seller's Acount</Link>
              </li>
            </ul>
          </div>
        </div>
    );
}

export default ShopNav;