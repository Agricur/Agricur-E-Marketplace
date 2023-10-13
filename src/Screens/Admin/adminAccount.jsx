import React from 'react'
import Header from '../../Component/AdminOption/AdminHeader.jsx'
import Footer from '../../Component/Layout/Footer.jsx'
import AdminAccount from '../../Component/Accounts/AdminAccountCom.jsx'

const AdminAccountPage = () => {
    // Define your item data here or fetch it from an API
    
    return (
      <div>
        <Header />
        <AdminAccount />
        <Footer />
      </div>
    );
  };
  
  export default AdminAccountPage;
