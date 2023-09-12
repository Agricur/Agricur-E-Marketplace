import React from 'react'
import Header from '../../Component/Layout/Header'
import Navbar from '../../Component/Layout/Navbar'
import Footer from '../../Component/Layout/Footer'
import Grains from '../../Component/Categories/Grains'

const FertilizersPage = () => {

  return (
    <div>
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        <Grains/>
        <Footer />
    </div>
  )
}

export default FertilizersPage