import React from "react";
import Header from "../../Component/Layout/Header.jsx";
import Navbar from "../../Component/Layout/Navbar.jsx";
import Footer from "../../Component/Layout/Footer.jsx";
import CourierAccountCom from "../../Component/Accounts/CourierAccountCom.jsx";

const CourierAccount = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <CourierAccountCom />
        <Footer />
    </div>
  )
}

export default CourierAccount