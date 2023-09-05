import React from "react";

const CartItem = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {
  return (
    <tr>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex flex-col gap-2 justify-start">
          <div className="flex">
            <img className="h-21 w-28 rounded-lg border border-green-700" src={item.image} alt={item.name} />
          </div>
          <div className="">
            <div className="text-lg font-bold text-gray-900">{item.name}</div>
          </div>
          <div className="text-base font-medium text-gray-900">Rs. {item.price.toFixed(2)}</div>
          <div>
          <button onClick={() => onRemoveItem(item)} className="bg-red-500 hover:bg-red-700 text-sm text-white font-semibold py-2 px-4 rounded-full">Remove</button>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 flex">
          <button onClick={() => onDecreaseQuantity(item)} className="bg-gray-300 text-gray-600 hover:text-gray-700 h-full w-5 rounded-l cursor-pointer outline-none">-</button>
          <input type="number" className="outline-none focus:outline-none text-center w-5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" value={item.quantity}></input>
          <button onClick={() => onIncreaseQuantity(item)} className="bg-gray-300 text-gray-600 hover:text-gray-700  h-full w-5 rounded-r cursor-pointer">+</button>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="text-lg font-medium text-gray-900">Rs. {(item.price * item.quantity).toFixed(2)}</div>
      </td>
    </tr>
  );
};

export default CartItem;
