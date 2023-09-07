import React from 'react'
import Header from '../Component/Layout/Header'
import Navbar from '../Component/Layout/Navbar'
import Footer from '../Component/Layout/Footer'
import Hero from '../Component/Layout/Hero'


const HomePage = () => {
  return (
    <div>
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        
        
        <Hero/>
        <Footer />
    </div>
  )
}

export default HomePage