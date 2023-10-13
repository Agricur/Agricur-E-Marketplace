import React, { useState, useEffect } from "react";
import ShopProducts from "./ShopProductHandle";
import EditShop from "./EditShop";
import ShopCourierSection from "./ShopCouriers";
import ViewMessages from "../Messenger/ViewMessages";
import OrderHistory from "./OrderHistoryShop";
import { server } from "../../server";
import Image from "../../Assets/profilePhoto.png"
import { useNavigate } from "react-router-dom";


const ShopSettings = ({ user_id }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Products");
  const navigate = useNavigate();

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
      navigate("/userAccount");
    }
  };

  const [shopData, setShopData] = useState("");
  const userID = { user_id }.user_id;

  useEffect(() => {
    fetch(`${server}/api/shop/data/${userID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setShopData(data.shop);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userID]);

  return (
    <div className="bg-gray-100 min-h-screen pb-8 pt-28">
      <div className="mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white h-fit rounded-lg p-4 m-2 md:mx-8 shadow-md mb-4 md:mb-0 ">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto overflow-hidden border-2 border-[#3da749]">
            {shopData.image ? (
              <img
                src={`${server}/${shopData.image}`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={`${Image}`} 
                alt="Default Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">
            {shopData.shop_name}
          </h2>

          {/* Email Address */}
          {/* <p className="text-gray-600 text-center text-sm mt-2">
            shopname@example.com
          </p> */}

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md mt-4">
            <button
              className={`${
                selectedNavItem === "Products"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Products")}
            >
              Products
            </button>
            <button
              className={`${
                selectedNavItem === "Edit Shop"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Edit Shop")}
            >
              Edit Shop
            </button>
            <button
              className={`${
                selectedNavItem === "Couriers"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Couriers")}
            >
              Couriers
            </button>
            <button
              className={`${
                selectedNavItem === "Messages"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Messages")}
            >
              Messages
            </button>
            <button
              className={`${
                selectedNavItem === "Order History"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Order History")}
            >
              Order History
            </button>
            <button
              className={`${
                selectedNavItem === "Seller's Acount"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Seller's Acount")}
            >
              <a href="/userAccount">
                Seller's Account
              </a>
              
            </button>
          </div>
        </div>

        {renderComponent()}

      </div>
    </div>
  );
};

export default ShopSettings;
