import React, { useEffect, useState } from "react";
import { server } from "../../server";

const Img = `${server}/mangoes-composition-royalty-free-image-463651383-1564092088-1694332881311-666996414.png`

const Dashboard = (props) => {
  const orders = [
    {
      productImage: Img,
      product: "Mangos",
      quantity: 3,
      deliveryDate: "2023-11-01",
      deliveryService: "Standard",
      amount: "LKR 1250",
      paymentMethod: "Cash on Delivery",
    },
    
  ];

  const userID = props.user_id;
  const [address, setAddress] = useState({
    houseNo: "",
    street: "",
    city: "",
    district: "",
    phone: "",
  });

  useEffect(() => {
    if (props.user_type === "true") {
      fetch(`${server}/api/seller/sellerData/${userID}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setAddress({
            ...address,
            houseNo: data.home_no,
            street: data.street,
            city: data.city,
            district: data.district,
            phone: data.contact_no,
          });
        })

        .catch((error) => {
          console.error("Error fetching buyer data:", error);
        });
    } else {
      fetch(`${server}/api/user/userData/${userID}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setAddress({
            ...address,
            houseNo: data.home_no,
            street: data.street,
            city: data.city,
            district: data.district,
            phone: data.contact_no,
          });
        })

        .catch((error) => {
          console.error("Error fetching buyer data:", error);
        });
    }
  });

  return (
    <div className="md:w-3/4 pl-4 mr-8">
      {/* Right Upper Rectangle */}
      <div className="max-w-full h-48 bg-white rounded-lg p-4 shadow-md mb-4">
        {/* Address */}
        <h2 className="text-xl font-semibold">Address</h2>
        <p className="text-gray-600 mt-2">
          House Number : {address.houseNo}
          <br />
          Street : {address.street}
          <br />
          City : {address.city}
          <br />
          District : {address.district}
          <br />
          Contact Number: {address.phone}
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
                        DELIVERY DATE (EST)
                      </th>
                      <th scope="col" className="px-6 py-4">
                        DELIVERY SERVICE
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
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-primary-100 text-neutral-800"
                            : "bg-primary-200 text-neutral-800"
                        }
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <div className="flex items-center">
                            <img
                              src={order.productImage}
                              alt={order.orderNumber}
                              className="w-12 h-12 mr-2 rounded-full"
                            />
                            {order.product}
                          </div>
                        </td>
                        <td className="px-4 py-2">{order.quantity}</td>
                        <td className="px-4 py-2">{order.deliveryDate}</td>
                        <td className="px-4 py-2">{order.deliveryService}</td>
                        <td className="px-4 py-2">{order.amount}</td>
                        <td className="px-4 py-2">{order.paymentMethod}</td>
                      </tr>
                    ))}
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
