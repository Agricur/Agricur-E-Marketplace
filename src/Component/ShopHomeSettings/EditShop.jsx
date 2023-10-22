import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { server } from "../../server";
import { toast } from "react-toastify";

const EditShop = (props) => {
  
  const userID = props.user_id;

  const districts = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Vavuniya",
    "Mullaitivu",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Moneragala",
    "Ratnapura",
    "Kegalle",
  ];

  const [shopData, setShopData] = useState({
    shopID: "",
    shopName: "Shop Name",
    sellerName: "Seller",
    sellerEmail: "mail@example.com",
    shopDescription: "",
    shopImage: null,
    shopNo: "",
    street: "",
    city: "",
    district: "",
  });


  useEffect(() => {
    fetch(`${server}/api/shop/getShopInfo/${userID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setShopData({
          ...shopData,
          shopName: data.shop_name,
          sellerName: data.seller_name,
          sellerEmail: data.seller_email,
          shopImage: data.shop_image,
          shopID: data.shop_id,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setShopData({
        ...shopData,
        [name]: files[0],
      });
    } else {
      setShopData({
        ...shopData,
        [name]: value,
      });
    }
  };

console.log(shopData);

  const handleSaveShopName = async () => {
    const shopName = {
      shopName: shopData.shopName, 
    };
    await axios.put(`${server}/api/shop/edit-name/${shopData.shopID}`, shopName).then((res) => {
      toast.success(res.data.message);
})};

const handleSaveShopAddress = async () => {
  const shopAddress = {
    shopNo: shopData.shopNo,
    street: shopData.street,
    city: shopData.city,
    district: shopData.district,
  };
  await axios.put(`${server}/api/shop/edit-address/${shopData.shopID}`, shopAddress).then((res) => {
    toast.success(res.data.message);
})
};

  const handleSaveProfilePhoto = async () => {
    const formData = new FormData();
    formData.append("shopImage", shopData.shopImage);

    try {
      await axios.put(`${server}/api/shop/edit-photo/${shopData.shopID}`, formData,
      {
        headers: {
        "Content-Type": "multipart/form-data", 
      }}).then((res) => {
        toast.success(res.data.message);
      });
      // // Handle success
    } catch (error) {
      // Handle error
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleSaveShopDescription = async () => {
    const shopDescription = {
      shopDescription: shopData.shopDescription,
    };
    try {
      await axios.put(`${server}/api/shop/edit-description/${shopData.shopID}`, shopDescription).then((res) => {
        toast.success(res.data.message);
      });
      // Handle success
    } catch (error) {
      // Handle error
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Shop</h2>

      {/* Shop Information */}
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Shop Information</h3>
        <p className="text-gray-600">Seller Name: {shopData.sellerName}</p>
        <p className="text-gray-600">Seller Email: {shopData.sellerEmail}</p>
      </div>

      {/* Edit Shop Name */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Shop Name</h3>
        <input
          type="text"
          name="shopName"
          placeholder={shopData.shopName}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
        />
      </div>
      <button
        onClick={handleSaveShopName}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Name
      </button>

      {/* Edit Shop Address */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Shop Address</h3>
        <input
          type="text"
          name="shopNo"
          value={shopData.shopNo}
          onChange={handleInputChange}
          placeholder="Shop Number"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <input
          type="text"
          name="street"
          value={shopData.street}
          onChange={handleInputChange}
          placeholder="Street"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <div className="flex">
          <input
            type="text"
            name="city"
            value={shopData.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 mr-2 focus:border-[#3CB44A]"
          />
          <select
            name="district"
            value={shopData.district}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A] "
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option
                key={district}
                value={district}
                className="font-semibold hover:bg-[#24692d] hover:text-white"
              >
                {district}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSaveShopAddress}
          className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
        >
          Save Address
        </button>
      </div>

      {/* Edit Profile Photo */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Profile Photo</h3>
        <input
          type="file"
          name="shopImage"
          accept="image/*"
          onChange={handleInputChange}
          className="mt-2"
        />
      </div>
      <button
        onClick={handleSaveProfilePhoto}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Profile Photo
      </button>

      {/* Edit Shop Description */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Shop Description</h3>
        <textarea
          name="shopDescription"
          value={shopData.shopDescription}
          placeholder="Shop Description"
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] focus:outline-none"
          rows="4"
        />
      </div>
      <button
        onClick={handleSaveShopDescription}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Description
      </button>
    </div>
  );
};

export default EditShop;
