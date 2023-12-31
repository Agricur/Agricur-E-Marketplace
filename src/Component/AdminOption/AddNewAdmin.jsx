import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const AddNewAdmin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleAdding = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

    if (password !== rePassword) {
      setPasswordError("Passwords do not match.");
      return; // Prevent form submission
    }
    if (password.length < 8) {
      setPasswordError(
        "Password must be at least 8 characters long and must contain at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return; // Prevent form submission
    }

    if (!password.match(passwordRegex)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return; // Prevent form submission
    } else {
      setPasswordError("");
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    console.log(formData);

    try {
      const response = await axios.post(
        `${server}/api/admin/admin-register`,
        formData
      );

      // Check the response from the server and handle success or errors accordingly
      if (response.status === 201) {
        
        toast.success(response.data);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setPassword("");
        setRePassword("");
        setPasswordError("");
      } else {
        // Handle server errors
        toast.error("Registration failed. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      if (error.response.status === 400) {
        toast.error("Email already exists!");
      } else {
        console.error("An error occurred:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-0 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Admin</h2>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">First Name</h4>
        <input
          type="text"
          name="FirstName"
          value={firstName}
          placeholder="Enter the First Name"
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Last Name</h4>
        <input
          type="text"
          name="LastName"
          value={lastName}
          placeholder="Enter the Last Name"
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Email</h4>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter the Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
        />
      </div>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Contact Number</h4>
        <input
          type="tel"
          name="contactno"
          value={phoneNumber}
          placeholder="Enter the Contact Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <div>
        <div className="mb-4 relative">
          <h4 className="text-lg font-semibold">Password</h4>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter the Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
              required
            />
            {passwordVisible ? (
              <AiOutlineEye
                className="absolute right-2 top-2.5 cursor-pointer"
                size={18}
                onClick={() => setPasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2.5 cursor-pointer"
                size={18}
                onClick={() => setPasswordVisible(true)}
              />
            )}
          </div>
        </div>
        <div className="mb-4 relative">
          <h4 className="text-lg font-semibold">Re-Enter Password</h4>
          <div className="relative">
            <input
              type={rePasswordVisible ? "text" : "password"}
              name="rePassword"
              value={rePassword}
              placeholder="Re-Enter the Password"
              onChange={(e) => setRePassword(e.target.value)}
              className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
              required
            />
            {rePasswordVisible ? (
              <AiOutlineEye
                className="absolute right-2 top-2.5 cursor-pointer"
                size={18}
                onClick={() => setRePasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2.5 cursor-pointer"
                size={18}
                onClick={() => setRePasswordVisible(true)}
              />
            )}
          </div>
        </div>
        <div
          className="md:w-full"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {passwordError && (
            <p
              className="text-red-500 mb-2 font-normal"
              style={{ fontSize: "14px" }}
            >
              {passwordError}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleAdding}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Add New Admin
      </button>
    </div>
  );
};

export default AddNewAdmin;
