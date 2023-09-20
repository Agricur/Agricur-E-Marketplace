import React from 'react'
import Header from '../../Component/Layout/Header'
import Navbar from '../../Component/Layout/Navbar'
import Footer from '../../Component/Layout/Footer'
import Fertilizers from '../../Component/Categories/Fertilizers'

const FertilizersPage = () => {


  return (
    <div>
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        <Fertilizers/>
        <Footer />
    </div>
  )
}

export default FertilizersPage