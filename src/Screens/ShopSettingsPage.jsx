import React, { useEffect, useState } from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import ShopSettings from "../Component/ShopHomeSettings/ShopSettings";
import Cookies from "js-cookie";
import { server } from "../server";
import Login from "../Component/Login/Login";
import {useNavigate} from "react-router-dom";

const ShopSettingsPage = () => {
  const [userID, setUserID] = useState("");
  const [userType,setUserType] = useState("");
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
          setUserID(data.user_id);
          setUserType(data.is_seller.toString());           
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
      {userCookie && userType === "true" && (
        <>
          <ShopSettings user_id={userID} />
          <Footer />
        </>
      )}
      {userCookie && userType != "true" && (
        <>
          {navigate("/")}
        </>
      )}
    </div>
  );
};

export default ShopSettingsPage;
