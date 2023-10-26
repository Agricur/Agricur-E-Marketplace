import React,{useState} from 'react'
import Chart from "react-apexcharts";

const AdminDashboard = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "Income of the Shops"
            
          },
          xaxis: {
            categories: ["Mango Shop", "Shop Sara", "Ajith's Shop", "Veg Shop", "Nuwan Banana Shop", "Sayu Shop", "Game Kade", "Tish Shop"]
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
    <div className="md:w-3/4 pl-4 mr-8">
          {/* Right Upper Rectangle */}
          <div className="max-w-full bg-white rounded-lg p-4 shadow-md mb-4 md:flex md:space-x-4 justify-center items-center">
            <div className="max-w-sm xl:w-1/4 bg-white rounded-lg shadow dark:bg-[#d9eada]  p-4 md:p-6 md:flex-shrink-0 md:flex-grow-0">
              {/* Chart 1 */}
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-green-700 pb-2">32</h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-500">New buyer </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  12%
                  <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                  </svg>
                </div>
              </div>
              <div id="area-chart"></div>
              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                  {/* Add your additional content here */}
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-gray-900"
                    type="button">
                    Last 7 days
                    <svg className="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {/* Add more buttons, labels, or content as needed */}
                  <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-green-500 hover:text-green-900 dark:hover:text-green-900  hover:bg-gray-100 dark:hover:bg-[#b9cfba]  dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                    Users Report
                    <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm xl:w-1/4 bg-white rounded-lg shadow dark:bg-[#d9eada]  p-4 md:p-6 md:flex-shrink-0 md:flex-grow-0">
              {/* Chart 2 */}
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-green-700 pb-2">23</h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-500">New sellers </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  2%
                  <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                  </svg>
                </div>
              </div>
              <div id="area-chart"></div>
              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                  {/* Add your additional content here */}
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-gray-900"
                    type="button">
                    Last 7 days
                    <svg className="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {/* Add more buttons, labels, or content as needed */}
                  <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-green-500 hover:text-blue-700 dark:hover:text-green-900  hover:bg-gray-100 dark:hover:bg-[#b9cfba] dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                    Users Report
                    <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm xl:w-1/4 bg-white rounded-lg shadow dark:bg-[#d9eada]  p-4 md:p-6 md:flex-shrink-0 md:flex-grow-0">
              {/* Chart 3 */}
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-green-700 pb-2">24</h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-500">New products </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  1%
                  <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                  </svg>
                </div>
              </div>
              <div id="area-chart"></div>
              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                  {/* Add your additional content here */}
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-gray-900"
                    type="button">
                    Last 7 days
                    <svg className="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {/* Add more buttons, labels, or content as needed */}
                  <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-green-500 hover:text-blue-700 dark:hover:text-green-900  hover:bg-gray-100 dark:hover:bg-[#b9cfba] dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                    Users Report
                    <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Down Rectangle */}
          <div className="container mx-auto items-center bg-white rounded-lg p-4 shadow-md">
            {/* Top Sales Representatives*/}
            <h2 className="text-xl text-center font-semibold">Top Sales Representatives</h2>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm">
                      <thead className="border-b text-white font-medium dark:border-neutral-500 bg-[#3da749]">
                        <tr>
                          <th scope="col" className="px-6 py-4">Shop Name</th>
                          <th scope="col" className="px-6 py-4">Income</th>
                          <th scope="col" className="px-6 py-4">No. of Products</th>
                          <th scope="col" className="px-6 py-4">No. of Customers</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Veg Shop</td>
                          <td className="px-4 py-2 font-bold">84 000 LKR</td>
                          <td className="px-4 py-2">202</td>
                          <td className="px-4 py-2">123</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Ajith's Shop</td>
                          <td className="px-4 py-2 font-bold">70 000 LKR</td>
                          <td className="px-4 py-2">252</td>
                          <td className="px-4 py-2">183</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Sayu Shop</td>
                          <td className="px-4 py-2 font-bold">65 000 LKR</td>
                          <td className="px-4 py-2">185</td>
                          <td className="px-4 py-2">103</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Tish Shop</td>
                          <td className="px-4 py-2 font-bold">60 000 LKR</td>
                          <td className="px-4 py-2">200</td>
                          <td className="px-4 py-2">98</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Shop Sara</td>
                          <td className="px-4 py-2 font-bold">48 000 LKR</td>
                          <td className="px-4 py-2">172</td>
                          <td className="px-4 py-2">123</td>
                        </tr>
                        <tr 
                          className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                          <td className="px-4 py-2">Nuwan Banana Shop</td>
                          <td className="px-4 py-2 font-bold">48 000 LKR</td>
                          <td className="px-4 py-2">143</td>
                          <td className="px-4 py-2">76</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* bar chart */}
                    <div className="">
                      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                      <h2 className="text-lg font-semibold mb-2">Income of the Shops</h2>
                      <Chart options={state.options} series={state.series} type="bar" height={300} width="900"/>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Number of customers in the Shops</h2>
                        <Chart options={state.options} series={barChartData1} type="bar"  height={300} width="900" />
                      </div>

                      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Number of items in the Shops</h2>
                        <Chart options={state.options} series={barChartData2} type="bar" height={300} width="900"/>
                      </div>
                    </div> 

                    {/* pie chart */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h2 className="text-lg font-semibold mb-2">Salles Categories</h2>
                      <Chart options={pieChartData.options} series={pieChartData.series} type="pie" width="75%" /> {/* Adjust the width class here */}
                    </div>

                    {/* donut chart */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h2 className="text-lg font-semibold mb-2">Sales Categories (Donut Chart)</h2>
                      <Chart options={donutChartData.options} series={donutChartData.series} type="donut" width="75%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AdminDashboard