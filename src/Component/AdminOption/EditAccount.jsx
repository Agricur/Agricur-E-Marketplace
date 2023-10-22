import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const EditAccount = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [image, setProfilePhoto] = useState("");
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [phoneNumber, setPhoneNumber] = useState(props.contactNo);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSavebuyerName = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
    };

    try {
      await axios.put(
        `${server}/api/admin/updateAdminName/${props.adminID}`,
        data
      );
      window.location.reload();
      toast.success("Name Updated Successfully");
      
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  const handleSaveContact = async () => {
    const data = {
      contact: phoneNumber,
    };
    try {
      await axios.put(
        `${server}/api/admin/updateAdminContact/${props.adminID}`,
        data
      );
      window.location.reload();
      toast.success("Contact Updated Successfully");
      
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  const handleSaveProfilePhoto = async () => { 
    const data = {
      image: image,
    };

    try {
      await axios.put(
        `${server}/api/admin/updateAdminProfilePhoto/${props.adminID}`,
        data,{
          headers: {
            "Content-Type": "multipart/form-data", 
          }
        }
      );
      window.location.reload();
      toast.success("Profile Photo Updated Successfully");
      
    } catch (error) {
      toast.error("Error Occured");
    }
  }


  const handleSavePassword = async () => {


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
      try {
        const data = {
          password: password,
        };
        await axios.put(
          `${server}/api/admin/updateAdminPassword/${props.adminID}`,
          data
        );
        window.location.reload();
        toast.success("Password Updated Successfully");
        
      } catch (error) {
        toast.error("Error Occured");
      }
    }

  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-0 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Account</h2>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Edit First Name</h4>
        <input
          type="text"
          name="FirstName"
          placeholder={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Edit Last Name</h4>
        <input
          type="text"
          name="LastName"
          placeholder={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <button
        onClick={handleSavebuyerName}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Name
      </button>

      <hr className="my-4" />
    
      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Edit Contact Number</h4>
        <input
          type="tel"
          name="contactno"
          placeholder={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <button
        onClick={handleSaveContact}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Contact Number
      </button>

      <hr className="my-4" />

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Edit Profile Photo </h4>
        <input
          type="file"
          name="profilePhoto"
          accept="image/*"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] "
          required
        />
      </div>
      <button
        onClick={handleSaveProfilePhoto}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Save Profile Photo
      </button>

      <hr className="my-4" />

      <div>
        <div className="mb-4 relative">
          <h4 className="text-lg font-semibold">Entet The New Password</h4>
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
          <h4 className="text-lg font-semibold">Re-Enter The Password</h4>
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
        <button
        onClick={handleSavePassword}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2  "
      >
        Save Password
      </button>
      </div>

    </div>
  );
};

export default EditAccount;
