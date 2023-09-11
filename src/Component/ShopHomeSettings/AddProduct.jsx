import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Import the back arrow icon
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ShopProductHandle from "./ShopProductHandle";

const AddProductForm = ({ onBack, user_id }) => {
  console.log(user_id);
  const [productData, setProductData] = useState({
    name: "",
    category: "-- Select --",
    price: "", // Price input
    priceUnit: "-- Unit --",
    image: null, // For image upload
    quantity: "", // Quantity input
    quantityUnit: "-- Unit --",
  });

  const handleChange = async (e) => {
    const { name, value, type } = e.target;

    // Special handling for file input
    if (type === "file") {
      setProductData({
        ...productData,
        [name]: e.target.files[0],
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("category", productData.category);
    formData.append("price", productData.price);
    formData.append("priceUnit", productData.priceUnit);
    formData.append("image", productData.image);
    formData.append("quantity", productData.quantity);
    formData.append("quantityUnit", productData.quantityUnit);
    formData.append("user_id", user_id);

    

    // console.log(formData.file);

    try {
      // Send the form data to the server using axios or a similar library
      const response = await axios.post(`${server}/api/shop/addProduct`,formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      // Check the response from the server and handle success or errors accordingly
      if (response.status === 201) {
        // Handle success
        toast.success(response.data.message);
        // onBack();
        window.location.reload(<ShopProductHandle/>);
      } else {
        // Handle server errors
        toast.error("Product can't be added. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or other unexpected errors

      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }

    // Handle submitting the product data (e.g., send it to an API)
    // You can add your logic here

    // After submitting, you can clear the form and navigate back
    setProductData({
      name: "",
      category: "",
      price: "",
      priceUnit: "",
      image: null,
      quantity: "",
      quantityUnit: "",
    });

    // Trigger the callback to navigate back to the product list
    onBack();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onBack}
          className="text-[#3da749] hover:text-[#296b33]"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">Add a New Product</h2>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full font-semibold"
            required
          >
            <option value="">-- Select -- </option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Grains">Grains</option>
            <option value="Fertilizers">Fertilizers</option>
            <option value="Equipment">Equipment</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                name="priceUnit"
                value={productData.priceUnit}
                onChange={handleChange}
                className="p-2 border-l border-gray-300 rounded-r-lg font-semibold"
                required
              >
                <option value="">-- Unit -- </option>
                <option value="/kg">/kg</option>
                <option value="/g">/g</option>
                <option value="1 unit">/1 unit</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center font-semibold">
              <select
                name="quantityUnit"
                value={productData.quantityUnit}
                onChange={handleChange}
                className="p-2 border-l border-gray-300 rounded-r-lg font-semibold"
                required
              >
                <option value="">-- Unit -- </option>
                <option value="kg"> kg </option>
                <option value="g">g</option>
                <option value="units">units</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div className="mt-6">
          <button
            
            type="submit"
            className="bg-[#3da749] hover:bg-[#296b33] text-white font-semibold px-4 py-2 rounded-3xl"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
