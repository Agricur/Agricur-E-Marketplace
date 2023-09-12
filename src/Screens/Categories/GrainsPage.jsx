import React from 'react'
import Header from '../../Component/Layout/Header'
import Navbar from '../../Component/Layout/Navbar'
import Footer from '../../Component/Layout/Footer'
import Grains from '../../Component/Categories/Grains'
import Cookies from "js-cookie";
import { server } from "../../server";
import { useEffect, useState } from 'react';

const FertilizersPage = () => {

  const [userID,setUserID]=useState("");
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
          // Use 'data' to populate the user profile section in your header
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
        
        <div className='fixed z-10 w-full'>
          <Header />
          <Navbar />
        </div>
        <Grains/>
        <Footer />
    </div>
  )
}

export default FertilizersPage