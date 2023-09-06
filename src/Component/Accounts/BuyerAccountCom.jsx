import React from 'react';
import profilePhoto from '../../Images/userImage.png';

const BuyerAccountPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Header */}
      <header className="bg-white-600 text-black text-center">
        <h1 className="text-center text-2xl font-bold">Account Information</h1>
      </header>

      <div className="container mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <div className="md:w-1/4 bg-white rounded-lg p-4 mx-8 shadow-md mb-4 md:mb-0">
          {/* Profile Photo */}
          <div className="rounded-full h-36 w-36 mx-auto">
            <img src={profilePhoto} alt="Profile Photo" />
          </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Buyer Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">buyer@example.com</p>

          {/* Navigation Bar */}
          <div className="rounded-lg shadow-md ml-4 mt-4">
            <ul className="space-y-2">
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">Edit Profile</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">My Cart</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">My Orders</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">My Payments</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">Messages</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660]">
                <a href="#" className="block">Shopping History</a>
              </li>
              <li className="p-4 bg-[#badfa2] font-bold py-2 px-4 rounded hover:bg-[#c4e660] text-red-600">
                <a href="#" className="block">Log out</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-3/4 pl-4 mr-8">
          {/* Right Upper Rectangle */}
          <div className="max-w-full h-48 bg-white rounded-lg p-4 shadow-md mb-4">
            {/* Address */}
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="text-gray-600 mt-2">
              House Number 123<br />
              Street<br />
              City<br /> 
              District<br />
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Right Down Rectangle */}
          <div className="container mx-auto items-center bg-white rounded-lg p-4 shadow-md">
            {/* Current Orders */}
            <h2 className="text-xl text-center font-semibold">Current Orders</h2>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm">
                      <thead className="border-b font-medium dark:border-neutral-500 bg-[#badfa2]">
                        <tr>
                          <th scope="col" className="px-6 py-4">PRODUCT</th>
                          <th scope="col" className="px-6 py-4">QUANTITY</th>
                          <th scope="col" className="px-6 py-4">DERIVERY DATE (EST)</th>
                          <th scope="col" className="px-6 py-4">DERIVERY SERVICE</th>
                          <th scope="col" className="px-6 py-4">AMOUNT</th>
                          <th scope="col" className="px-6 py-4">PAYMENT METHOD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_1
                          </td>
                          <td className="px-4 py-2">1</td>
                          <td className="px-4 py-2">2023-09-30</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 543</td>
                          <td className="px-4 py-2">Cash on Delivery</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_2
                          </td>
                          <td className="px-4 py-2">3</td>
                          <td className="px-4 py-2">2023-09-15</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 4563</td>
                          <td className="px-4 py-2">PayPal</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_3
                          </td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">2023-09-25</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 320</td>
                          <td className="px-4 py-2">Cash on Delivery</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_4
                          </td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">2023-10-15</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 500</td>
                          <td className="px-4 py-2">PayPal</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_5
                          </td>
                          <td className="px-4 py-2">1</td>
                          <td className="px-4 py-2">2023-09-30</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 543</td>
                          <td className="px-4 py-2">Cash on Delivery</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_6
                          </td>
                          <td className="px-4 py-2">3</td>
                          <td className="px-4 py-2">2023-09-15</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 4563</td>
                          <td className="px-4 py-2">PayPal</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_7
                          </td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">2023-09-25</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 320</td>
                          <td className="px-4 py-2">Cash on Delivery</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            Order_8
                          </td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">2023-10-15</td>
                          <td className="px-4 py-2">Standard</td>
                          <td className="px-4 py-2">LKR 500</td>
                          <td className="px-4 py-2">PayPal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;
