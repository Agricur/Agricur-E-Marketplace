import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import Img from '../Images/herow.jpg'
import ShopSettings from '../Component/ShopHomeSettings/ShopSettings';

const ShopSettingsPage = () => {
    
  return (
    <div className="bg-cover" style={{backgroundImage:`url(${Img})`}}>
    <Header />
    <Navbar />
    <ShopSettings />
    <Footer />
  </div>
  )
}

export default ShopSettingsPage