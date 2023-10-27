import React, { useState, useEffect } from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Checkout from "../Component/Checkout/Checkout";
import Footer from "../Component/Layout/Footer";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { server } from "../server";
import Login from "../Component/Login/Login";

const CheckoutPage = () => {
  const product = useParams();
  const userCookie = Cookies.get("jwtToken");
  const [userType, setuserType] = useState(false);
  const [userID, setuserID] = useState("");

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
          setuserID(data.user_id);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userCookie]);

  return (
    <div className="bg-[#d9eada]">
      <div>
        {userCookie ? (
          <div className="fixed z-10 w-full">
            <Header />
            <Navbar />
          </div>
        ) : (
          <Login />
        )}
        {userCookie && (
          <>
            <Checkout product={product} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
