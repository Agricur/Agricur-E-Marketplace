import React from 'react'
import Header from '../../Component/Layout/Header'
import Navbar from '../../Component/Layout/Navbar'
import Footer from '../../Component/Layout/Footer'
import Fruits from '../../Component/Categories/Fruits'

const FertilizersPage = () => {


  return (
    <div>
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        <Fruits/>
        <Footer />
    </div>
  )
}

export default FertilizersPage