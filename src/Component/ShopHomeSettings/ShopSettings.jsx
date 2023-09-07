import React from 'react';
import profilePhoto from '../../Images/Logo.png';
import ShopSettingItems from './ShopSettingItems';

const ShopSettings = () => {

  return (
    <div className="min-h-screen py-8 mx-1 md:mx-8">
      {/* Header */}
      <header className="bg-white-600 text-black text-center">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">Shop Settings</h1>
      </header>

      <div className="mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white h-fit rounded-lg p-4 m-2 md:mx-8 shadow-md mb-4 md:mb-0 border border-green-700">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            <img src={profilePhoto} alt="Profile" />
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Shop Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">shopname@example.com</p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md items-center mt-4">
            <ul className="space-y-2">
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Edit Shop Information</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">View Shop Items</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Add New Item</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Select a Courier</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Messages</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Order History</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="/#" className="block">Seller's Acount</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-3/4 mx-2 mt-2 md:mx-6">
          {/* Right Upper Rectangle */}
          <div className="max-w-full h-48 bg-white rounded-lg p-4 shadow-md mb-4 border border-green-700">
            {/* Address */}
            <h2 className="text-xl font-semibold">Shop Address</h2>
            <p className="text-gray-600 mt-2">
              Shop Number <br />
              Street<br />
              City<br /> 
              District<br />
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Right Down Rectangle */}
          <div className="my-4 py-2 items-center bg-white rounded-lg shadow-md border border-green-700">
            <ShopSettingItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSettings;
