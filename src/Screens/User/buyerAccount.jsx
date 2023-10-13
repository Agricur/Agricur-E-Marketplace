import React, { useEffect, useState } from "react";
import Header from "../../Component/Layout/Header.jsx";
import Navbar from "../../Component/Layout/Navbar.jsx";
import Footer from "../../Component/Layout/Footer.jsx";
import BuyerAccount from "../../Component/Accounts/BuyerAccountCom.jsx";
import Login from "../../Component/Login/Login.jsx";
import Cookies from "js-cookie";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const BuyerAccountPage = () => {
  const [userType, setuserType] = useState(false);
  const [userID,setuserID] = useState("");
  const userCookie = Cookies.get("jwtToken");
  const navigate = useNavigate();

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
          setuserType(data.is_seller.toString());
          setuserID(data.user_id)
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
      {userCookie && userType === 'false' && (
        <>
          <BuyerAccount user_type = {userType} user_id = {userID} />
          <Footer />
        </>
      )}
      {userCookie && userType === 'true' && (
        <>
          <BuyerAccount user_type = {userType} user_id = {userID} />
          <Footer />
        </>
      )}
      {userCookie && userType != 'false' && userType != 'true' && (
        <>
          {navigate("/")}
        </>
      )}
    </div>
  );
};

export default BuyerAccountPage;
