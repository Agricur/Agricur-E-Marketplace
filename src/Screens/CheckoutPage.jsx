import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Checkout from "../Component/Checkout/Checkout";
import Footer from "../Component/Layout/Footer";

const CheckoutPage = () => {
  return (
    <div className="bg-[#d9eada]">
        <Header />
        <Navbar />
        <Checkout />
        <Footer />
    </div>
  )
}

export default CheckoutPage