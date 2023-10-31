import React from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import Hero from "../Component/Layout/Hero";
import AllProducts from "../Component/Layout/AllProducts";
import Cookies from "js-cookie";
import { server } from "../server";
import { useEffect, useState } from "react";

const HomePage = () => {
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
          setUserID(data.user_id);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userCookie]);

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <AllProducts user_id={userID} />
      <Footer />
    </div>
  );
};

export default HomePage;
