import React from 'react'
import Header from '../Component/Layout/Header'
import Navbar from '../Component/Layout/Navbar'
import Footer from '../Component/Layout/Footer'
import Hero from '../Component/Layout/Hero'


const HomePage = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero/>
        <Footer />
    </div>
  )
}

export default HomePage