import React, { useState } from "react";
import ShopProducts from "./ShopProductHandle";
import EditShop from "./EditShop";
import ShopCourierSection from "./ShopCouriers";
import ViewMessages from "../Messenger/ViewMessages";
import OrderHistory from "./OrderHistoryShop";

import profilePhoto from "../../Images/Logo.png";

const ShopSettings = ({ user_id }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Products");
  console.log(selectedNavItem);
  const renderComponent = () => {
    if (selectedNavItem === "Edit Shop") {
      return <EditShop user_id={user_id} />;
    } else if (selectedNavItem === "Products") {
      return <ShopProducts user_id={user_id} />;
    } else if (selectedNavItem === "Couriers") {
      return <ShopCourierSection />;
    } else if (selectedNavItem === "Messages") {
      return <ViewMessages />;
    } else if (selectedNavItem === "Order History") {
      return <OrderHistory />;
    } else if (selectedNavItem === "Seller's Acount") {
      return <h1>Seller's Acount</h1>;
    }
  };

  

  return (
    <div className="bg-gray-100 min-h-screen pb-8 pt-28">
      <div className="mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white h-fit rounded-lg p-4 m-2 md:mx-8 shadow-md mb-4 md:mb-0 ">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            <img src={profilePhoto} alt="Profile" />
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Shop Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">
            shopname@example.com
          </p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md mt-4">
            <button 
           className={`${
            selectedNavItem === "Products" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
          }`}
            onClick={() => setSelectedNavItem("Products")}>
              Products
            </button>
            <button
              className={`${
                selectedNavItem === "Edit Shop" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Edit Shop")}
            >
              Edit Shop
            </button>
            <button 
            className={`${
              selectedNavItem === "Couriers" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
            }`}
            onClick={() => setSelectedNavItem("Couriers")}>
              Couriers
            </button>
            <button 
            className={`${
              selectedNavItem === "Messages" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
            }`}
            onClick={() => setSelectedNavItem("Messages")}>
              Messages
            </button>
            <button 
            className={`${
              selectedNavItem === "Order History" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
            }`}
            onClick={() => setSelectedNavItem("Order History")}>
              Order History
            </button>
            <button 
            className={`${
              selectedNavItem === "Seller's Acount" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
            }`}
            onClick={() => setSelectedNavItem("Seller's Acount")}>
              Seller's Account
            </button>
          </div>
        </div>

        {renderComponent()}

        {/* <ShopDashborad /> */}
        {/* <ShopProducts user_id = {user_id} /> */}
        {/* <EditShop user_id = {user_id} /> */}
        {/* <ShopCourierSection /> */}
      </div>
    </div>
  );
};

export default ShopSettings;
