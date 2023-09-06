import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Checkout from "../Component/Checkout/Checkout";
import Footer from "../Component/Layout/Footer";
import Img from '../Images/herow.jpg'

const CheckoutPage = () => {
  return (
    <div className="bg-cover" style={{backgroundImage:`url(${Img})`}}>
        <Header />
        <Navbar />
        <Checkout />
        <Footer />
    </div>
  )
}

export default CheckoutPage