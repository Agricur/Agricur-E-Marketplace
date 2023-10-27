import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../server";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";

const CartItem = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {

  const userCookie = Cookies.get("jwtToken");
  const [sellingWeight,setSellingWeights] = useState('')

  const handlePrice = () => {

    if (sellingWeight === "" || sellingWeight == item.quantity) {
      return (item.price/1).toFixed(2);
    }
     else {
      let data = sellingWeight.split("g");
      data = data[0].split("k");
      if (item.price_unit === "/kg" && data.length === 1) {
        return (parseFloat(item.unit_price * data[0]) / 1000).toFixed(2);
      } else {
        return parseFloat(item.price * data[0]).toFixed(2);
      }
    }
  };

  const getWeightInKg = () => {
    let data = sellingWeight.split("g");
    data = data[0].split("k");
    if (sellingWeight === "" || sellingWeight == item.quantity) {
      return parseFloat(item.quantity);
    } else {
      if (data.length === 1) {
        return parseFloat(data[0] / 1000);
      } else {
        return parseFloat(data[0]);
      }
    }
  };

  useEffect(() => {
    if(item.price_unit === '/kg'){
      item = {
        ...item,
        price: parseFloat(handlePrice()),
        quantity: getWeightInKg(),
      };
      

        axios.post(`${server}/api/cart/updateCart`, item).then((response) => {
          if(response.status === 200){
            // toast.success(response.data.message);
          }
          else{

            toast.error(response.data.message);
          }
        }).catch((error) => {
          console.log(error)
        })
    }
  }, [sellingWeight]);


  return (
    <tr>
      <td className="px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src={`${server}/${item.image}`}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-lg font-medium text-gray-900">
              {item.name}
            </p>
            <p className="text-sm text-gray-500">
              {`LKR. ${item.unit_price}`}
              {item.price_unit}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
      <div className="flex justify-center sm:justify-start items-center">
          {item.price_unit === "/kg" ? (
            <>
            
              <select
                onChange={(e) => setSellingWeights(e.target.value)}
                className="rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value={item.quantity}>{item.quantity < 1 ?(item.quantity*1000 + 'g'):(item.quantity+'kg')}</option>
                {
                 (JSON.parse(item.selling_weight)).map((weight) => (
                    <option value={weight}>{weight}</option>
                  ))

                }
              </select>
            </>
          ) : (
            <>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => onDecreaseQuantity(item)}
              >
                -
              </button>
              <p className="mx-2 text-lg">{item.quantity}</p>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => onIncreaseQuantity(item)}
              >
                +
              </button>
            </>
          )}
        </div>
      </td>
      <td className="px-4 py- border-t border-gray-200">
      {item.quantity_unit === "units" ? (
          <p className="text-sm sm:text-lg font-medium text-gray-900">{`LKR. ${(
            item.price * item.quantity).toFixed(2)}`}</p>
        ) : (
          <p className="text-sm sm:text-lg font-medium text-gray-900">{`LKR. ${handlePrice()}`}</p>
        )}
      </td>
      <td className="px-4 py-3">
        <button
          className="text-red-500 hover:text-red-700 ml-auto"
          onClick={() => onRemoveItem(item)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
