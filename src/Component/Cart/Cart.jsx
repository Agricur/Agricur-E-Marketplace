import React, { useState, useEffect } from "react";
import CartItem from "../Item/CartItem";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { waitFor } from "@testing-library/react";

const Cart = () => {
  // Initialize the cart from localStorage or with an empty array
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  const userCookie = Cookies.get("jwtToken");
  const storageCookie = Cookies.get("localStorage")

  useEffect(() => {
    if (userCookie) {
      setCartItems(JSON.parse(localStorage.getItem("cart"))||[]);
      fetch(`${server}/api/cart/getCart`, {
        method: "GET", 
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          setCartItems([])
        }
        else{
          setCartItems(data.cartItems);
        }
        
      }).catch((error) => {
        console.log(error)
      })  
    } 
      // Update localStorage whenever the cartItems change

      localStorage.setItem("cart", JSON.stringify(cartItems));
      if(storageCookie){
        // localStorage.clear();
      }
    
  }, []);

  if(!userCookie){
    window.addEventListener('beforeunload', function (event) {
    // Check if the event type is 'beforeunload' and not 'refresh'
      if (event.type === 'beforeunload') {
        // Clear the local storage
        localStorage.clear();
      }
    });
  }
  
  


  
  const [refresh,setRefresh] = useState(0);

  const handleIncreaseQuantity = async (item) => {
    
    if(refresh<4){
      setRefresh(refresh+1)
    }else{
      window.location.reload("/cart")
      setRefresh(0)
    }
    
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    
    if(userCookie){
      setCartItems(updatedCartItems);
      await axios.post(`${server}/api/cart/updateCartItems`, {userCookie, cartItems: updatedCartItems}).then((res) =>{
      toast.success(res.data.message);
      
    });
    
    }
    
    setCartItems(updatedCartItems);
  
  };

  const handleDecreaseQuantity = async (item) => {
    
    if(refresh<4){
      setRefresh(refresh+1)
    }else{
      window.location.reload("/cart")
      setRefresh(0)
    }

    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    if(userCookie){
      setCartItems(updatedCartItems);
      await axios.post(`${server}/api/cart/updateCartItems`, {userCookie, cartItems: updatedCartItems}).then((res) =>{
      toast.success(res.data.message);
    });
    }
    setCartItems(updatedCartItems);
  };

  const onChangeWeight = async (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, quantity: item.quantity, price: item.price };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    calculateTotalPrice();
  };


  const handleRemoveItem = async (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product_id !== item.product_id
    );
    if(userCookie){
      setCartItems(updatedCartItems);
      await axios.post(`${server}/api/cart/removeItems`, {userCookie, cartItems: updatedCartItems}).then((res) =>{
      toast.success(res.data.message);
    });
    }
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      if(item.quantity_unit === "units"){
        total += item.price * item.quantity;
      }
      else{
        total += parseFloat(item.price);
      }
    });
    return total.toFixed(2);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (userCookie) {
      // navigate("/checkout");
    } else {
      toast.error("Must be logged before place the order")
      setTimeout(() => {
        navigate("/login"); 
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto p-4  sm:p-8 max-w-screen-xl">
      <h1 className="text-sm sm:text-2xl mt-32 md:text-4xl  font-medium mb-4">
        Shopping Cart
      </h1>
      <div className="rounded-lg opacity-85 bg-white shadow-lg p-4 ">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full rounded-lg divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-100 rounded-xl font-bold">
                  <td className="px-4 py-3">Product</td>
                  <td className="px-4 py-3">Quantity</td>
                  <td className="px-4 py-3">Total Price</td>
                  <td className="px-4 py-3">Remove</td>
                </tr>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.product_id}
                    item={item}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    onRemoveItem={handleRemoveItem}
                    onChangeWeight={onChangeWeight}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-xl sm:text-2xl font-semibold">
            Total: Rs. {calculateTotalPrice()}
          </p>
        </div>
      </div>

      <div className="mt-8 mr-4 flex justify-center">
          <button onClick={handleCheckout} className="bg-green-600 hover:bg-green-900 text-white px-4 py-2 rounded-full sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Proceed to Checkout
          </button>
      </div>
    </div>
  );
};

export default Cart;
