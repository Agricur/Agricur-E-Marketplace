import React from 'react'
import Header from "../../Component/Layout/Header";
import Navbar from "../../Component/Layout/Navbar";
import Cart from "../../Component/Cart/Cart";
import Footer from "../../Component/Layout/Footer";

const CartPage = () => {
  return (
    <div className="bg-[#d9eada]">
          <Header />
          <Navbar />
        <Cart />
        <Footer />
    </div>
  )
}

export default CartPage