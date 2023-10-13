import React from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Shopsview from "../Component/ShopView/ShopsView";
import Footer from "../Component/Layout/Footer";

const ShopsPage = () => {

  return (
    <div className="bg-[#d9eada]">
      <Header />
      <Navbar />
      <Shopsview />
      <Footer />
    </div>
  );
};

export default ShopsPage;
