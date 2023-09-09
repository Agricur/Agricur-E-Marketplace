import React from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import ShopSettings from "../Component/ShopHomeSettings/ShopSettings";

const ShopSettingsPage = () => {
  return (
    <div>
      <div className="fixed z-10 w-full">
        <Header />
        <Navbar />
      </div>

      <ShopSettings />
      <Footer />
    </div>
  );
};

export default ShopSettingsPage;
