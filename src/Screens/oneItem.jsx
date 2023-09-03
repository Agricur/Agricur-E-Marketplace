import React from 'react'
import Header from '../Component/Layout/Header'
import Navbar from '../Component/Layout/Navbar'
import Footer from '../Component/Layout/Footer'
import OneItem from '../Component/Item/oneItemCom'

const OneItemPage = () => {
    // Define your item data here or fetch it from an API
    const itemData = {
      name: 'Sample Item',
      description: 'This is a sample item description.',
      specifications: ['Spec 1: Value 1', 'Spec 2: Value 2', 'Spec 3: Value 3'],
    };
  
    return (
      <div>
        <Header />
        <Navbar />
        
        <div>
            <OneItem item={itemData} />
        </div> 
        <Footer />
      </div>
    );
  };
  
  export default OneItemPage;
