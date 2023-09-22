import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../server";

const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
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
            <p className="text-sm sm:text-lg font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{`Rs. ${item.price}`}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-center sm:justify-start items-center">
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
        </div>
      </td>
      <td className="px-4 py- border-t border-gray-200">
        <p className="text-sm sm:text-lg font-medium text-gray-900">{`Rs. ${(item.price * item.quantity)}`}</p>
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
