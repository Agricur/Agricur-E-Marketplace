import React from 'react'
import Header from '../Component/Layout/Header.jsx'
import Navbar from '../Component/Layout/Navbar.jsx'
import Footer from '../Component/Layout/Footer.jsx'
import AdminAccount from '../Component/Accounts/AdminAccountCom.jsx'

const AdminAccountPage = () => {
    // Define your item data here or fetch it from an API
    
    return (
      <div>
        <Header />
        <Navbar />
        <AdminAccount />
        <Footer />
      </div>
    );
  };
  
  export default AdminAccountPage;
