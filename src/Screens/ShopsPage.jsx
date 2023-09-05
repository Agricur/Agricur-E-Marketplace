import React from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Shopsview from "../Component/ShopView/ShopsView";
import Footer from "../Component/Layout/Footer";
import Img from '../Images/herow.jpg'

const ShopsPage = () => {

  return (
    <div className="bg-cover" style={{backgroundImage:`url(${Img})`}}>
      <Header />
      <Navbar />
      <Shopsview />
      <Footer />
    </div>
  );
};

export default ShopsPage;
