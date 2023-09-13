import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import Img from '../Images/herow.jpg'
import ShopHome from '../Component/ShopView/ShopHome';

const ShopHomePage = () => {
  return (
    <div className="bg-[#d9eada]">
    <Header />
    <Navbar />
    <ShopHome />
    <Footer />
  </div>
  )
}

export default ShopHomePage