import React, { useEffect, useState } from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import ShopSettings from "../Component/ShopHomeSettings/ShopSettings";
import Cookies from "js-cookie";
import { server } from "../server";

const ShopSettingsPage = () => {
  const [userID, setUserID] = useState("");
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
          const first_name = data.first_name;
          setUserID(data.user_id);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <ShopSettings user_id={userID} />
      <Footer />
    </div>
  );
};

export default ShopSettingsPage;
