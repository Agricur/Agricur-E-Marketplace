import React from "react";

const Checkout = () => {

  const handlePlaceOrder = () => {
    // Implement the logic to place the order here
    console.log('Order placed!');
  }

  return (
    <div className="m-4 sm:m-8 md:m-16 flex flex-col sm:flex-row">
      <div className="flex-col m-4 sm:m-8 md:m-4 md:basis-1/2">
        <div className="bg-white opacity-85 shadow-lg border border-green-700 rounded-lg p-6 flex flex-row justify-between items-center my-4">
          <div>
            <h1 className="text-2xl font-Roboto font-semibold mb-3">
              Shipping Address
            </h1>
            <p className="inline">
              <b>Kamal De Silva</b>
            </p>
            <p className="inline mx-2">071 234 5678</p>
            <p>No: 160, </p>
            <p>Kanaththa Road, </p>
            <p>Ja-Ela.</p>
            <p>
              <strong>District</strong> - Gampaha
            </p>
          </div>
          <div>
            <button className="text-lg text-green-800 font-semibold">
              Change
            </button>
          </div>
        </div>
        <div className="bg-white opacity-85 shadow-lg border border-green-700 rounded-lg p-6">
          <h1 className="text-2xl font-Roboto font-semibold mb-6">
            Choose the Payment Method
          </h1>
          <ul class="grid w-full gap-10 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
              ></input>
              <label
                for="hosting-small"
                class="flex w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="w-full text-center text-xl font-semibold">
                  Cash On Delivery
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              ></input>
              <label
                for="hosting-big"
                class="flex w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="w-full text-center text-xl font-semibold">
                  Pay with PayPal
                </div>
              </label>
            </li>
          </ul>
          <p className="text-xl mt-12 mb-4"><b className="text-green-700">Agricur</b> keeps your information and payment safe.</p>
        </div>
      </div>
      <div className="flex-auto m-4 sm:m-8 md:m-4 md:basis=1/2">
        <div className="bg-white opacity-85 shadow-lg border border-green-700 rounded-lg p-6 flex flex-col w-full my-4">
          <h1 className="text-2xl font-Roboto font-semibold mb-3">
            Your Order
          </h1>

          <div class="relative overflow-x-auto border shadow-md rounded-lg sm:rounded-lg">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3">
                    Product name
                  </th>
                  <th scope="col" class="py-3">
                    Unit Price(Rs.)
                  </th>
                  <th scope="col" class="py-3">
                    Total Price(Rs.)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Product_1  x1
                  </th>
                  <td class="py-4">20.00</td>
                  <td class="py-4">20.00</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Product_2  x2
                  </th>
                  <td class="py-4">30.00</td>
                  <td class="py-4">60.00</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Product_3  x3
                  </th>
                  <td class="py-4">40.00</td>
                  <td class="py-4">120.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex justify-between">
            <p className="text-lg font-medium inline">Shipping Cost</p>
            <p className="text-lg font-medium inline">Rs. 200</p>
          </div>
          <div className="my-4 flex justify-between">
            <p className="text-xl font-medium inline">Total</p>
            <p className="text-xl font-semibold inline">Rs. 400</p>
          </div>
          <div className="my-4">
              <button
                type="submit"
                className="group relative w-full h-auto flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-[#3CB44A] hover:bg-[#24692d]"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
