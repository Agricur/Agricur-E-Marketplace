import React, { useEffect, useState } from "react";
import EditAccount from "../BuyerOptions/EditBuyerAccount";
import OrderHistory from "../Item/OrderHistory";
import BuyerDashboard from "../BuyerOptions/Dashboard";
import Messenger from "../Messenger/ViewMessages";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";

const BuyerAccount = (props) => {
  const userType = props.user_type
  const userID = props.user_id
  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");
  const navigate = useNavigate();
  const [buyerData, setBuyerData] = useState({
    buyerName: "Buyer Name",
    buyerEmail: "Buyer Email",
    profilePhoto: null,
  });

  useEffect(() => {
    fetch(`${server}/api/user/userData/${userID}`,{
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setBuyerData({
          ...buyerData,
          buyerName: data.first_name,
          buyerEmail: data.email,
          profilePhoto: data.profile_photo,
        });
      })
      .catch((error) => {
        console.error("Error fetching buyer data:", error);
      });
  });

  const renderComponent = () => {
    if (selectedNavItem === "Dashboard") {
      return <BuyerDashboard user_id={ userID } user_type={ userType }/>;
    } else if (selectedNavItem === "Edit Account") {
      return <EditAccount user_id={ userID }/>;
    } else if (selectedNavItem === "Messages") {
      return <Messenger/>;
    } else if (selectedNavItem === "Order History") {
      return <OrderHistory />;
    } else if (selectedNavItem === "View Shop") {
      navigate("/shopAccount");
    }
  };

  

  return (
    <div className="bg-gray-100 min-h-screen pb-8 pt-28">
      <div className="container mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white rounded-lg p-4 mx-8 shadow-md mb-4 md:mb-0">
          {/* Profile Photo */}
          <div className="h-36 w-36 mx-auto">
            <img src={`${server}/${buyerData.profilePhoto}`} className="rounded-full" alt="Profile" />
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">{buyerData.buyerName}</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">
            {buyerData.buyerEmail}
          </p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md mt-4">
            <button 
           className={`${
            selectedNavItem === "Dashboard" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
          }`}
            onClick={() => setSelectedNavItem("Dashboard")}>
              Dashboard
            </button>
            <button
              className={`${
                selectedNavItem === "Edit Account" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setSelectedNavItem("Edit Account")}
            >
              Edit Account
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
            {props.user_type === 'true' && (
              <button
                className={`${
                  selectedNavItem === "View Shop" ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b " : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
                }`}
                onClick={() => setSelectedNavItem("View Shop")}
              >
                View Shop
              </button>
            )
            }
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

export default BuyerAccount;
