import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditShop = () => {
  const { shopId } = useParams();

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
    shopName: "Shop Name",
    sellerName: "Seller Name",
    sellerEmail: "seller@example.com",
    shopDescription: "Shop Description",
    profilePhoto: null,
  });

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

  const handleSaveShopName = async () => {
    try {
      await axios.put(`/api/shops/${shopId}/name`, {
        shopName: shopData.shopName,
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const handleSaveShopAddress = async () => {};

  const handleSaveProfilePhoto = async () => {
    const formData = new FormData();
    formData.append("profilePhoto", shopData.profilePhoto);

    try {
      await axios.put(`/api/shops/${shopId}/profile-photo`, formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const handleSaveShopDescription = async () => {
    try {
      await axios.put(`/api/shops/${shopId}/description`, {
        shopDescription: shopData.shopDescription,
      });
      // Handle success
    } catch (error) {
      // Handle error
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
            name="addressCity"
            value={shopData.addressCity}
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
          onClick={handleSaveShopName}
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
          name="profilePhoto"
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
          placeholder={shopData.shopDescription}
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
