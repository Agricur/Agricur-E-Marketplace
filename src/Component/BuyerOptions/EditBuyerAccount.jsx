import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditAccount = () => {
  const { buyerID } = useParams();

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

  const [buyerData, setBuyerData] = useState({
    buyerName: "Buyer Name",
    buyerEmail: "buyer@example.com",
    buyerDescription: "Buyer Description",
    profilePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setBuyerData({
        ...buyerData,
        [name]: files[0],
      });
    } else { 
      setBuyerData({
        ...buyerData,
        [name]: value,
      });
    }
  };

  const handleSavebuyerName = async () => {
    try {
      await axios.put(`/api/shops/${buyerID}/name`, {
        buyerName: buyerData.buyerName,
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const handleSaveShopAddress = async () => {};

  const handleSaveProfilePhoto = async () => {
    const formData = new FormData();
    formData.append("profilePhoto", buyerData.profilePhoto);

    try {
      await axios.put(`/api/shops/${buyerID}/profile-photo`, formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const handleSavebuyerDescription = async () => {
    try {
      await axios.put(`/api/shops/${buyerID}/description`, {
        buyerDescription: buyerData.buyerDescription,
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Buyer Details</h2>

      {/* Shop Information */}
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Buyer Information</h3>
        <p className="text-gray-600">Buyer Name: {buyerData.buyerName}</p>
        <p className="text-gray-600">Buyer Email: {buyerData.buyerEmail}</p>
      </div>

      {/* Edit Buyer Name */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Buyer Name</h3>
        <input
          type="text"
          name="buyerName"
          placeholder={buyerData.buyerName}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
        />
      </div>
      <button
        onClick={handleSavebuyerName}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Name
      </button>

      {/* Edit Shop Address */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Buyer Address</h3>
        <input
          type="text"
          name="homeNo"
          value={buyerData.shopNo}
          onChange={handleInputChange}
          placeholder="Home Number"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <input
          type="text"
          name="street"
          value={buyerData.street}
          onChange={handleInputChange}
          placeholder="Street"
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <div className="flex">
          <input
            type="text"
            name="addressCity"
            value={buyerData.addressCity}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 mr-2 focus:border-[#3CB44A]"
          />
          <select
            name="district"
            value={buyerData.district}
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
          onClick={handleSavebuyerName}
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

      {/* Edit Buyer Description */}
      <hr className="my-4" />
      <div className="mb-4 relative">
        <h3 className="text-lg font-semibold">Edit Buyer Description</h3>
        <textarea
          name="buyerDescription"
          placeholder={buyerData.buyerDescription}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] focus:outline-none"
          rows="4"
        />
      </div>
      <button
        onClick={handleSavebuyerDescription}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Description
      </button>
    </div>
  );
};

export default EditAccount;
