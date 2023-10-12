import React, { useEffect, useState } from "react";
import Header from "../../Component/Layout/Header.jsx";
import Navbar from "../../Component/Layout/Navbar.jsx";
import Footer from "../../Component/Layout/Footer.jsx";
import BuyerAccount from "../../Component/Accounts/BuyerAccountCom.jsx";
import Login from "../../Component/Login/Login.jsx";
import Cookies from "js-cookie";
import { server } from "../../server";

const BuyerAccountPage = () => {
  const [userType, setuserType] = useState(false);
  const userCookie = Cookies.get("jwtToken");

  useEffect(() => {
    if (userCookie) {
      fetch(`${server}/api/user/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setuserType(data.is_seller);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <div>
      {userCookie? (
        <div className="fixed z-10 w-full">
          <Header />
          <Navbar />
        </div>
      ) : (
        <Login />
      )}
      {userCookie && !userType && (
        <>
          <BuyerAccount user_type = {userType} />
          <Footer />
        </>
      )}
      {userCookie && userType && (
        <>
          <BuyerAccount user_type = {userType} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BuyerAccountPage;
