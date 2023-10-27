import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { server } from "../../server";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


const Checkout = (props) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
   toast.success("Order Placed Successfully");
    navigate("/");
  
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState(false);
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantitiy, setQuantitiy] = useState(props.product.quantitiy);
  const [courier, setCourier] = useState("");
  const [shopId,setShopId] = useState("");
  const [shippingCost,setShippingCost] = useState(0);
  const userCookie = Cookies.get("jwtToken");

  useEffect(() => {
    if (userCookie) {
      fetch(`${server}/api/user/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const first_name = data.first_name;
          const user_id = data.user_id;
  
          setFirstName(first_name);
          setLastName(data.last_name);
          setUserId(user_id);
          setUserType(data.is_seller)
          
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      }    
      }, []);

      useEffect(() => {
        if(!userType){
          fetch(`${server}/api/user/userData/${userId}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setHouseNo(data.home_no);
            setStreet(data.street);
            setCity(data.city);
            setDistrict(data.district);
            
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
        }else{
          
          fetch(`${server}/api/seller/sellerData/${userId}`, {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
              setHouseNo(data.home_no);
              setStreet(data.street);
              setCity(data.city);
              setDistrict(data.district);
              
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
        }
        
      }, [userId]);

      useEffect(() => {
        fetch(`${server}/api/product/getProduct/${props.product.productId}`, {
          method: "GET", 
        }).then((response) => response.json())
        .then((data) => {
          setProductName(data.product.name);
          setUnitPrice(data.product.price);
          setShopId(data.product.shop_id);
        }).catch((error) => { 
          console.log(error)
        })
      }, [props.product.productId]);

      useEffect(() => {
        fetch(`${server}/api/seller/getCourier/${shopId}`, {
          method: "GET", 
        }).then((response) => response.json())
        .then((data) => {
          setCourier(data.courier_service);
        }).catch((error) => { 
          console.log(error)
        })
      }, [shopId]);

      


  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-col m-4 sm:m-8 md:m-4 md:basis-1/2">
        <div className="bg-white mt-32 opacity-85 shadow-lg  rounded-lg p-6 flex flex-row justify-between items-center my-4">
          <div>
            <h1 className="text-2xl font-Roboto font-semibold mb-3">
              Shipping Address
            </h1>
            <p className="inline">
              <b>{firstName} {lastName}</b>
            </p>
            <p>No: {houseNo}, </p>
            <p>{street}, </p>
            <p>{city}</p>
            <p>
              <strong>District</strong> - {district}
            </p>
          </div>
          <div>
            <button className="text-lg text-green-800 font-semibold">
              Change
            </button>
          </div>
        </div>
        <div className="bg-white opacity-85 shadow-lg rounded-lg p-6">
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
                class="flex w-full p-4 text-white rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#3da749] dark:hover:bg-[#296b33]"
              >
                <div class="w-full text-white text-center text-xl font-semibold">
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
                class="flex w-full p-4 text-gray-500 bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#3da749] dark:hover:bg-[#296b33]"
              >
                <div class="w-full text-white  text-center text-xl font-semibold">
                  Pay with PayPal
                </div>
              </label>
            </li>
          </ul>
          <p className="text-xl mt-12 mb-4"><b className="text-green-700">Agricur</b> keeps your information and payment safe.</p>
        </div>
      </div>
      <div className="flex-auto m-4 sm:m-8 md:m-4 md:basis=1/2">
        <div className="bg-white mt-32 opacity-85 shadow-lg rounded-lg p-6 flex flex-col w-full my-4">
          <h1 className="text-2xl font-Roboto font-semibold mb-3">
            Your Order
          </h1>

          <div class="relative overflow-x-auto border shadow-md rounded-lg sm:rounded-lg">
            <table class="w-full text-sm text-center text-black dark:text-balck">
              <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-[#3da749] dark:text-black">
                <tr>
                  <th scope="col" class="py-3">
                    Product name
                  </th>
                  <th scope="col" class="py-3">
                    Unit Price(Rs.)
                  </th>
                  <th scope="col" class="py-3">
                    quantity
                  </th>
                  <th scope="col" class="py-3">
                    Total Price(Rs.)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b text-black  dark:bg-[#d9eada] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#89a88b]">
                  <td
                    scope="row"
                    class="py-4 font-medium text-black whitespace-nowrap dark:text-black"
                  >
                    {productName}
                  </td>
                  <td class="py-4">{unitPrice}</td>
                  <td class="py-4">{quantitiy}</td>
                  <td class="py-4">{(props.product.price)}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
            <p className="text-lg font-medium inline my-4">Courier Service : {courier}</p>
          <div className="my-4 flex justify-between">
            
            <p className="text-lg font-medium inline">Shipping Cost</p>
            <p className="text-lg font-medium inline">Rs. 200</p>
          </div>
          <div className="my-4 flex justify-between">
            <p className="text-xl font-medium inline">Total</p>
            
            <p className="text-xl font-semibold inline">LKR. {(parseFloat(props.product.price)+200).toFixed(2)}</p>
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
