import React from "react";
import SellerNavPannel from "../Layout/SellerProfileNavPannel";
import Dashboard from "../Layout/SellerDashboard";
import ShopProducts from "../ShopHomeSettings/ShopProductHandle";

const ShopAccountPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-8 pt-28">
      {/* Header */}
      {/* <header className="bg-white-600 text-black text-center">
        <h1 className="text-center text-2xl font-bold">Account Information</h1>
      </header> */}

      <div className="container mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        
        <SellerNavPannel />
        <ShopProducts />
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};

export default ShopAccountPage;
