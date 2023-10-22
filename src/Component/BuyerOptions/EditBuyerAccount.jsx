import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { server } from "../../server";
import { toast } from "react-toastify";


const EditAccount = (props) => {

  const [userID,setuserID] = useState("");
  const userCookie = Cookies.get("jwtToken");

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
    profilePhoto: null,
    homeNo: "",
    street: "",
    city: "",
    district: "",
  });

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
          setuserID(data.user_id)
          setBuyerData({
            ...buyerData,
            buyerName: data.first_name,
            buyerEmail: data.email,
            profilePhoto: data.profile_photo,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setBuyerData({
        ...buyerData,
        [name]: e.target.files[0],
      });
    } else { 
      setBuyerData({
        ...buyerData,
        [name]: value,
      });
    }
  };
  

  const handleSavebuyerName = async () => {
      const buyerName = {
        buyerName: buyerData.buyerName, 
      };
      await axios.put(`${server}/api/user/edit-name/${userID}`, buyerName).then((res) => {
        toast.success(res.data.message);
  })};


  const handleSaveBuyerAddress = async () => {
    const buyerAddress = {
      homeNo: buyerData.homeNo,
      street: buyerData.street,
      city: buyerData.city,
      district: buyerData.district,
    };
    await axios.put(`${server}/api/user/edit-address/${userID}`, buyerAddress).then((res) => {
      toast.success(res.data.message);
  })};

  const handleSaveProfilePhoto = async () => {

    const formData = new FormData();
    formData.append("profilePhoto", buyerData.profilePhoto);
    try {
      await axios.put(`${server}/api/user/edit-photo/${userID}`, formData,
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


  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Buyer Details</h2>

      {/* Shop Information */}
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Buyer Information</h3>
        <p className="text-gray-600">Buyer Name : {buyerData.buyerName}</p>
        <p className="text-gray-600">Buyer Email : {buyerData.buyerEmail}</p>
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
          required
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
          value={buyerData.homeNo}
          onChange={handleInputChange}
          placeholder="Home Number"
          required
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <input
          type="text"
          name="street"
          value={buyerData.street}
          onChange={handleInputChange}
          placeholder="Street"
          required
          className="w-full border font-normal border-gray-300 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
        />
        <div className="flex">
          <input
            type="text"
            name="city"
            value={buyerData.city}
            onChange={handleInputChange}
            placeholder="City"
            required
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
                required
                className="font-semibold hover:bg-[#24692d] hover:text-white"
              >
                {district}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSaveBuyerAddress}
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
          required
        />
      </div>
      <button
        onClick={handleSaveProfilePhoto}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Profile Photo
      </button>
    </div>
  );
};

export default EditAccount;
