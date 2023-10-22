import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import adminPhoto from "../../Images/adminImage.png";
import Dashboard from "../AdminOption/AdminDashboard";
import AddNewAdmin from "../AdminOption/AddNewAdmin";
import EditAccount from "../AdminOption/EditAccount";
import Cookies from "js-cookie";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const AdminAccountPage = (props) => {
  const adminCookie = Cookies.get("jwtToken-admin");
  const navigate = useNavigate();
  const [navItem, setNavItem] = useState("Dashboard");

  const handleLogout = () => {
    Cookies.remove("jwtToken-admin");
    navigate("/adminLogin");
  };

  const renderComponent = () => {
    switch (navItem) {
      case "Dashboard":
        return <Dashboard />;
      case "AddNewAdmin":
        return <AddNewAdmin />;
      case "EditAccount":
        return (
          <EditAccount
            firstName={props.firstName}
            lastName={props.lastName}
            adminID={props.adminID}
            contactNo={props.contact}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  // useEffect(() => {
  //   if (adminCookie) {
  //     fetch(`${server}/api/admin/data`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${adminCookie}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const first_name = data.first_name;
  //         const email = data.email;
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //       });
  //   }

  // }, []);

  const [state, setState] = React.useState({
    options: {
      chart: {
        id: "Income of the Shops",
      },
      xaxis: {
        categories: [
          "Shop_A",
          "Shop_B",
          "Shop_C",
          "Shop_D",
          "Shop_E",
          "Shop_F",
          "Shop_G",
          "Shop_H",
          "Shop_A",
          "Shop_B",
          "Shop_C",
          "Shop_D",
          "Shop_E",
          "Shop_F",
          "Shop_G",
          "Shop_H",
        ],
      },
    },

    series: [
      {
        name: "Income",
        data: [34, 48, 70, 84, 48, 65, 36, 60],
        color: "#66cccc",
      },
    ],
  });
  // Data for the Number of customer chart

  const barChartData1 = [
    {
      data: [40, 76, 183, 123, 123, 103, 34, 98],
      color: "#66cc99",
    },
  ];

  // Data for the Number of Product chart
  const barChartData2 = [
    {
      data: [52, 143, 252, 202, 172, 185, 76, 200],
      color: "#66cc66",
    },
  ];

  // Define options and series for the pie chart
  const pieChartData = {
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Fruits", "Vegitables", "Grains", "Fertilizer", "Equipment"],
      colors: ["#4CBD49", "#AEF359", "#4B5320", "#FFFF99", "#996666"],
    },
    series: [96, 85, 57, 42, 68],
  };

  const donutChartData = {
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Fruits", "Vegetables", "Grains", "Fertilizer", "Equipment"],
      colors: ["#4CBD49", "#AEF359", "#4B5320", "#428257", "#3C5C62"],
    },
    series: [96, 85, 57, 42, 68],
  };

  return (
    <div className="bg-gray-100  pt-20 pb-8">
      <div className="container  mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 h-screen bg-white rounded-lg p-4 mx-8 shadow-md mb-4 md:mb-0">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            {props.profilePhoto === null?
              (<img src={adminPhoto} alt="Admin Profile Photo" className="rounded-full" />

              ):
            (<img src={`${server}/${props.profilePhoto}`} alt="Admin Profile Photo" className="rounded-full" />
              )} 
            
          </div>

          {/* Admin Name */}
          <h2 className="text-xl text-center font-semibold mt-4">
            {props.firstName}
          </h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">
            {props.email}
          </p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md ml-4 mt-4">
            <button
              className={`${
                navItem === "Dashboard"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("Dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`${
                navItem === "AddNewAdmin"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("AddNewAdmin")}
            >
              Add New Admin
            </button>
            <button
              className={`${
                navItem === "ViewShops"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("ViewShops")}
            >
              View Shops
            </button>
            <button
              className={`${
                navItem === "ViewBuyers"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("ViewBuyers")}
            >
              View Buyers
            </button>
            <button
              className={`${
                navItem === "ViewCouriera"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("ViewCouriers")}
            >
              View Couriers
            </button>
            <button
              className={`${
                navItem === "AddCourierServices"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("AddCourierServices")}
            >
              Add Courier Services
            </button>
            <button
              className={`${
                navItem === "AddExpertTips"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("AddExpertTips")}
            >
              Add Expert's Tips
            </button>
            <button
              className={`${
                navItem === "ViewSales"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("ViewSales")}
            >
              View Sales
            </button>
            <button
              className={`${
                navItem === "EditAccount"
                  ? "bg-[#316c39] text-white w-full p-4 block font-bold py-2 px-4 rounded border-b "
                  : "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }`}
              onClick={() => setNavItem("EditAccount")}
            >
              Edit Account
            </button>
            <button
              className={
                "w-full p-4 block font-bold py-2 px-4 rounded border-b bg-[#d9eada] hover:bg-[#3da749] border-gray-400"
              }
              onClick={() => handleLogout()}
            >
              Log Out
            </button>
          </div>
        </div>

        {/* <Dashboard /> */}
        {/* <AddNewAdmin /> */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminAccountPage;
