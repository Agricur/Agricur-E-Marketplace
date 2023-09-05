import React from 'react'
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Cart from "../Component/Cart/Cart";
import Footer from "../Component/Layout/Footer";
import Img from '../Images/herow.jpg'

const CartPage = () => {
  return (
    <div className="bg-cover" style={{backgroundImage:`url(${Img})`}}>
        <Header />
        <Navbar />
        <Cart />
        <Footer />
    </div>
  )
}

export default CartPage