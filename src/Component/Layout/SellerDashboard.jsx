import React from "react";

const Dashboard = () => {
  return (
    <div className="md:w-3/4 pl-4 mr-8">
      {/* Right Upper Rectangle */}
      <div className="max-w-full h-48 bg-white rounded-lg p-4 shadow-md mb-4">
        {/* Address */}
        <h2 className="text-xl font-semibold">Address</h2>
        <p className="text-gray-600 mt-2">
          House Number 123
          <br />
          Street
          <br />
          City
          <br />
          District
          <br />
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
                  <thead className="border-b font-medium dark:border-neutral-500 bg-[#d9eada]">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        PRODUCT
                      </th>
                      <th scope="col" className="px-6 py-4">
                        QUANTITY
                      </th>
                      <th scope="col" className="px-6 py-4">
                        DERIVERY DATE (EST)
                      </th>
                      <th scope="col" className="px-6 py-4">
                        DERIVERY SERVICE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        AMOUNT
                      </th>
                      <th scope="col" className="px-6 py-4">
                        PAYMENT METHOD
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_1
                      </td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">2023-09-30</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 543</td>
                      <td className="px-4 py-2">Cash on Delivery</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_2
                      </td>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">2023-09-15</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 4563</td>
                      <td className="px-4 py-2">PayPal</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_3
                      </td>
                      <td className="px-4 py-2">10</td>
                      <td className="px-4 py-2">2023-09-25</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 320</td>
                      <td className="px-4 py-2">Cash on Delivery</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_4
                      </td>
                      <td className="px-4 py-2">8</td>
                      <td className="px-4 py-2">2023-10-15</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 500</td>
                      <td className="px-4 py-2">PayPal</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_5
                      </td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">2023-09-30</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 543</td>
                      <td className="px-4 py-2">Cash on Delivery</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_6
                      </td>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">2023-09-15</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 4563</td>
                      <td className="px-4 py-2">PayPal</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Order_7
                      </td>
                      <td className="px-4 py-2">10</td>
                      <td className="px-4 py-2">2023-09-25</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2">LKR 320</td>
                      <td className="px-4 py-2">Cash on Delivery</td>
                    </tr>
                    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
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
  );
};

export default Dashboard;
