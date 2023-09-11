import React from "react";
import Header from "../Component/Layout/Header.jsx";
import Navbar from "../Component/Layout/Navbar.jsx";
import Footer from "../Component/Layout/Footer.jsx";
import ShopAccount from "../Component/Accounts/ShopAccountCom.jsx";

const ShopAccountPage = () => {
  // Define your item data here or fetch it from an API

  return (
    <div>
      <div className='fixed z-10 w-full'>
        <Header />
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default ShopAccountPage;
