import React, { useState,useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Import the back arrow icon
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import ShopProductHandle from "./ShopProductHandle";


const AddProductForm = ({ onBack, user_id }) => {

  const [productData, setProductData] = useState({
    name: "",
    category: "-- Select --",
    price: "", // Price input
    priceUnit: "-- Unit --",
    image: null, // For image upload
    quantity: "", // Quantity input
    quantityUnit: "-- Unit --",
    sellingQuantity: [],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setProductData({
        ...productData,
        [name]: e.target.files[0],
      });
    } else if (name === "sellingQuantity") {
      // Create a copy of the existing sellingQuantity array
      const updatedSellingQuantity = [...productData.sellingQuantity];

      if (e.target.checked) {
        // Add the value to the array if the checkbox is checked
        updatedSellingQuantity.push(value);
      } else {
        // Remove the value from the array if the checkbox is unchecked
        const index = updatedSellingQuantity.indexOf(value);
        if (index !== -1) {
          updatedSellingQuantity.splice(index, 1);
        }
      }

      // Set the updated array to the state
      setProductData({
        ...productData,
        sellingQuantity: updatedSellingQuantity,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };
  
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
    let grams = []
    let kg = []
    for (let i = 0; i < productData.sellingQuantity.length; i++) {
      
      const data = productData.sellingQuantity[i].split(" ");
      if(data[1] === 'g'){
        grams.push(data[0])
      }
      else{
        kg.push(data[0])
      }
      
    }
    grams.sort((a, b) => a - b);
    kg.sort((a, b) => a - b);
    for (let i = 0; i < grams.length; i++) {
      grams[i] = grams[i] + 'g'
    }
    for (let i = 0; i < kg.length; i++) {
      kg[i] = kg[i] + 'kg'
    }
   
    const sellingQuantities = [...grams, ...kg];
    formData.append("sellingQuantity", JSON.stringify(sellingQuantities));

    try {
      const response = await axios.post(`${server}/api/shop/addProduct`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        toast.success(response.data.message);
        localStorage.removeItem("products");
        window.location.reload(<ShopProductHandle />);
      } else {
        toast.error("Product can't be added. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setProductData({
      name: "",
      category: "",
      price: "",
      priceUnit: "",
      image: null,
      quantity: "",
      quantityUnit: "",
      sellingQuantity: [], // Clear the sellingQuantity array
    });

    
    onBack();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-[#3da749] hover:text-[#296b33]">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">Add a New Product</h2>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
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
            <option value="">-- Select --</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Grains">Grains</option>
            <option value="Fertilizers">Fertilizers</option>
            <option value="Equipment">Equipment</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
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
                <option value="">-- Unit --</option>
                <option value="/kg">/kg</option>
                <option value="1 unit">/1 unit</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
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
                <option className=""  value="">-- Unit --</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="units">units</option>
              </select>
            </div>
          </div>
        </div>
     
        {productData.quantityUnit !== "units" && (
         <div className="mb-4">
         <label htmlFor="sellingQuantity" className="block text-sm font-medium text-gray-700">
           Selling Quantities
         </label>
         <div className="mt-1 flex flex-wrap">
           {["50 g", "100 g", "250 g", "500 g", "1 kg", "2 kg", "5 kg", "10 kg"].map((quantity) => (
             <div key={quantity} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
               <input
                 type="checkbox"
                 id={quantity}
                 name="sellingQuantity"
                 value={quantity}
                 onChange={handleChange}
                 checked={productData.sellingQuantity.includes(quantity)}
                 className="mr-2 accent-[#3da749]"
               />
               <label htmlFor={quantity} className="mr-4 ">
                 {quantity}
               </label>
             </div>
           ))}
         </div>
       </div>
       
        )}

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
