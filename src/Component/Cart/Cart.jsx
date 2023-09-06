import React, { useState } from 'react';
import CartItem from '../Item/CartItem';
import Img from '../../Images/product_1.jpg'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      image: Img
    },
    {
      id: 2,
      name: "Product 2",
      price: 24.99,
      quantity: 1,
      image: Img, 
    },
    {
      id: 3,
      name: "Product 3",
      price: 14.99,
      quantity: 3,
      image: Img, 
    },
  ]);

  const handleIncreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {};

  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-screen-xl">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4">Shopping Cart</h1>
      <div className="rounded-lg opacity-85 bg-white shadow-lg p-4 border border-green-700">
        <table className="min-w-full rounded-lg divide-y divide-gray-200">
          <thead className="bg-gray-100 justify-between items-center">
            <tr>
              <th scope="col" className="px-4 py-3 text-sm sm:text-lg font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-4 py-3 text-sm sm:text-lg font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-4 py-3 text-sm sm:text-lg font-medium text-gray-500 uppercase tracking-wider">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
                onRemoveItem={handleRemoveItem}
              />
            ))}
          </tbody>
        </table>
        <div className="mt-8 flex justify-center">
          <p className="text-xl sm:text-2xl font-semibold">Total: Rs. {calculateTotalPrice().toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-8 mr-4 flex justify-center">
        <button className="bg-green-600 hover:bg-green-900 text-white px-4 py-2 rounded-full sm:text-base md:text-lg lg:text-xl xl:text-2xl" onClick={() => handleCheckout()}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
