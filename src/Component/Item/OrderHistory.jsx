import React from "react";
import Img from "../../Images/product_1.jpg";
import { server } from "../../server";

const OrderHistory = () => {
  const orders = [
    {
      productImage: `${server}/banana-wallpaper-royalty-free-image-172876004-1564092023-1694333415911-887429097.png`,
      orderNumber: "Banana",
      quantity: 1,
      orderedDate: "2023-08-01",
      status: "Closed",
      amount: "LKR 543",
      paymentMethod: "Cash on Delivery",
    },
    {
      productImage: `${server}/full-frame-shot-of-grapes-royalty-free-image-683832755-1564091979-1694355998164-802426651.png`,
      orderNumber: "Grapes",
      quantity: '3 Kg',
      orderedDate: "2023-08-06",
      status: "Finished",
      amount: "LKR 599",
      paymentMethod: "PayPal",
    },
    {
      productImage: `${server}/fresh-mushroom-champignon-on-dark-background-sliced-royalty-free-image-882824532-1564523220-1694333340265-217525673.png`,
      orderNumber: "Mushrooms",
      quantity: '500g',
      orderedDate: "2023-08-10",
      status: "Closed",
      amount: "LKR 620",
      paymentMethod: "Cash on Delivery",
    },
    
  ];

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <div>
        <h1 className="text-xl text-center font-semibold my-4">
          Order History
        </h1>
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
                        ORDERED DATE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        PAYMENT METHOD
                      </th>
                      <th scope="col" className="px-6 py-4">
                        AMOUNT
                      </th>
                      <th scope="col" className="px-6 py-4">
                        STATUS
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
                            {order.orderNumber}
                          </div>
                        </td>
                        <td className="px-4 py-2">{order.quantity}</td>
                        <td className="px-4 py-2">{order.orderedDate}</td>
                        <td className="px-4 py-2">{order.paymentMethod}</td>
                        <td className="px-4 py-2">{order.amount}</td>
                        <td className="px-4 py-2">{order.status}</td>
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

export default OrderHistory;
