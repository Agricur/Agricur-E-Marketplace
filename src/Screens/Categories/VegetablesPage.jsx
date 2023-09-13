import React from 'react'
import Header from '../../Component/Layout/Header'
import Navbar from '../../Component/Layout/Navbar'
import Footer from '../../Component/Layout/Footer'
import Vegetables from '../../Component/Categories/Vegetables'

const FertilizersPage = () => {

  return (
    <div>
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        <Vegetables/>
        <Footer />
    </div>
  )
}

export default FertilizersPage