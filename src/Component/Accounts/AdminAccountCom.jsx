import React from 'react';
import Chart from "react-apexcharts";
import adminPhoto from '../../Images/adminImage.png';
import Dashboard from '../AdminOption/AdminDashboard'
import AddNewAdmin from '../AdminOption/AddNewAdmin';


const AdminAccountPage = () => {
  const [state, setState] = React.useState({
      options: {
        chart: {
          id: "Income of the Shops"
          
        },
        xaxis: {
          categories: ["Shop_A", "Shop_B", "Shop_C", "Shop_D", "Shop_E", "Shop_F", "Shop_G", "Shop_H","Shop_A", "Shop_B", "Shop_C", "Shop_D", "Shop_E", "Shop_F", "Shop_G", "Shop_H"]
        }
      },

      series: [
        {
          name: "Income",
          data: [34, 48, 70, 84, 48, 65, 36, 60,],
          color: "#66cccc",
        }
        
      ]
    }
    
  );
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
      type: 'pie',
    },
    labels: ["Fruits", "Vegitables", "Grains", "Fertilizer", "Equipment"],
    colors: ['#4CBD49', '#AEF359', '#4B5320', '#FFFF99', '#996666']
  },
  series: [96, 85, 57, 42, 68],
  
};

const donutChartData = {
  options: {
    chart: {
      type: 'donut',
    },
    labels: ["Fruits", "Vegetables", "Grains", "Fertilizer", "Equipment"],
    colors: ['#4CBD49', '#AEF359', '#4B5320', '#428257', '#3C5C62'],
  },
  series: [96, 85, 57, 42, 68],
};



  
  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-8">
      
      <div className="container mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white rounded-lg p-4 mx-8 shadow-md mb-4 md:mb-0">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            <img src={adminPhoto} alt="Admin Profile Photo" />
          </div>

          {/* Admin Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Admin Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">admin@example.com</p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md ml-4 mt-4">
            <ul className="space-y-2">
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">Dashboard</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">View Shops</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">View Buyers</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">View Couriers</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">Add Courier Services</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">Add Expert's Tips</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749]">
                <a href="#" className="block">View Sales</a>
              </li>
              <li className="p-4 bg-[#d9eada] font-bold py-2 px-4 rounded hover:bg-[#3da749] text-red-600">
                <a href="#" className="block">Log out</a>
              </li>
            </ul>
          </div>
        </div>
        <Dashboard />
        {/* <AddNewAdmin /> */}
      </div>
    </div>
  );
};

export default AdminAccountPage;
