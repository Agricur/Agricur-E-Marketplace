import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditAccount = () => {
  const { sellerID } = useParams();

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

  const [sellerData, setSellerData] = useState({
    sellerName: "Seller Name",
    sellerEmail: "seller@example.com",
    sellerDescription: "Seller Description",
    profilePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setSellerData({
        ...sellerData,
        [name]: files[0],
      });
    } else {
      setSellerData({
        ...sellerData,
        [name]: value,
      });
    }
  };

  const handleSavesellerName = async () => {
    try {
      await axios.put(`/api/shops/${sellerID}/name`, {
        sellerName: sellerData.sellerName,
      });
    } catch (error) {
      // Handle error
    }
  };

  const handleSaveShopAddress = async () => {};

  const handleSaveProfilePhoto = async () => {
    const formData = new FormData();
    formData.append("profilePhoto", sellerData.profilePhoto);

    try {
      await axios.put(`/api/shops/${sellerID}/profile-photo`, formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const handleSavesellerDescription = async () => {
    try {
      await axios.put(`/api/shops/${sellerID}/description`, {
        sellerDescription: sellerData.sellerDescription,
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Seller Details</h2>

      {/* Shop Information */}
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Seller Information</h3>
        <p className="text-gray-600">Seller Name: {sellerData.sellerName}</p>
        <p className="text-gray-600">Seller Email: {sellerData.sellerEmail}</p>
      </div>

      {/* Edit Seller Name */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Seller Name</h3>
        <input
          type="text"
          name="sellerName"
          placeholder={sellerData.sellerName}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
        />
      </div>
      <button
        onClick={handleSavesellerName}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Name
      </button>

      {/* Edit Shop Address */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Seller Address</h3>
        <input
          type="text"
          name="homeNo"
          value={sellerData.shopNo}
          onChange={handleInputChange}
          placeholder="Home Number"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <input
          type="text"
          name="street"
          value={sellerData.street}
          onChange={handleInputChange}
          placeholder="Street"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <div className="flex">
          <input
            type="text"
            name="addressCity"
            value={sellerData.addressCity}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 mr-2 focus:border-[#3CB44A]"
          />
          <select
            name="district"
            value={sellerData.district}
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
          onClick={handleSavesellerName}
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

      {/* Edit Seller Description */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Seller Description</h3>
        <textarea
          name="sellerDescription"
          placeholder={sellerData.sellerDescription}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] focus:outline-none"
          rows="4"
        />
      </div>
      <button
        onClick={handleSavesellerDescription}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Description
      </button>
    </div>
  );
};

export default EditAccount;
