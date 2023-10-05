import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import ShopHome from '../Component/ShopView/ShopHome';
import { useParams } from 'react-router-dom';

const ShopHomePage = () => {

  const shop_id = 25
  console.log(shop_id);
  return (
    <div className="bg-[#d9eada]">
    <Header />
    <Navbar />
    <ShopHome shopID = {shop_id}/>
    <Footer />
  </div>
  )
}

export default ShopHomePage