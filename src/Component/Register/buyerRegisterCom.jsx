import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Design from "../../Images/Design.png";
import Background from "../../Images/regBackground.png";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/style";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const BuyerRegister = () => {

  const navigate = useNavigate();

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

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [district, setDistrict] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    
  
    const formData = {
      email:email,
      first_name:firstName,
      last_name:lastName,
      contact_no:phoneNumber,
      password:password,
      rePassword:rePassword,
      number:houseNo,
      street:street,
      city:addressCity, 
      district:district
    }; 

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

    if (password !== rePassword) {
      setPasswordError("Passwords do not match.");
      return; // Prevent form submission
    }
    if(password.length < 8){
      setPasswordError("Password must be at least 8 characters long.");
      return; // Prevent form submission
    }

    if(!password.match(passwordRegex)){
      setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.");
      return; // Prevent form submission
    }
    else{
      setPasswordError("");
    }

    try {
      // Send the form data to the server using axios or a similar library
      const response = await axios.post(`${server}/api/user`, formData);
      // console.log(response.status);
      
      // Check the response from the server and handle success or errors accordingly
      if (response.status === 201) {
        // Handle success
        alert("Registration successful!");
        navigate('/login');
      } 
      else {
        // Handle server errors
        toast.error("Registration failed. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      if(error.response.status === 400){
        alert("Email already exists!")
      }
      else{
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again later.");
      }
      
    }
    // console.log(firstName, lastName, email, houseNo, street, addressCity, district, phoneNumber, password, rePassword);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  return (
    <div className="flex justify-center items-center ">
      <div
        className="bg-cover bg-center h-full w-full min-h-screen"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white bg-opacity-80 p-4 sm:p-[44px] rounded-lg shadow-lg w-full max-w-screen-cs3">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold mb-4">Sign up to Agricur</h1>
              <img
                src={Design}
                alt=""
                height="70"
                width="70"
                className="mx-auto"
              />
              <h6 className="text-lg mb-2 font-semibold">
                Please enter your details below
              </h6>
              <form
                className="space-y-6 font-semibold text-gray-700"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="md:w-1/2">
                    <div className="mb-4">
                      <label className="block mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 focus:border-[#3CB44A]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1">Second Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 focus:border-[#3CB44A]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 focus:border-[#3CB44A]"
                        required
                      />
                    </div>
                    <div className="mb-4 ">
                      <label className="block mb-1">Address</label>
                      <input
                        type="text"
                        name="houseNo"
                        value={houseNo}
                        onChange={(e) => setHouseNo(e.target.value)}
                        placeholder="House Number"
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
                        required
                      />
                      <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="Street"
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A]"
                        required
                      />
                      <div className="flex">
                        <input
                          type="text"
                          name="addressCity"
                          value={addressCity}
                          onChange={(e) => setAddressCity(e.target.value)}
                          placeholder="City"
                          className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 mb-2 mr-2 focus:border-[#3CB44A]"
                          required
                        />
                        <select
                          name="district"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="border border-gray-400 rounded-md py-2 px-3 mb-2 focus:border-[#3CB44A] "
                          required
                        >
                          <option value="">Select District</option>
                          {districts.map((district) => (
                            <option
                              key={district}
                              value={district}
                              className="font-semibold hover:bg-[#24692d]"
                            >
                              {district}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="mb-4">
                      <label className="block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 focus:border-[#3CB44A]"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <div className="relative">
                          <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 pr-10 focus:border-[#3CB44A]"
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
                      <div className="mb-4">
                        <label className="block mb-1">Re-Enter Password</label>
                        <div className="relative">
                          <input
                            type={rePasswordVisible ? "text" : "password"}
                            name="rePassword"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            className="w-full border font-normal border-gray-400 rounded-md py-2 px-3 pr-10 focus:border-[#3CB44A]"
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
                      <div className="md:w-full" style={{ display: "flex", flexDirection: "column" }}>
                        {passwordError && <p className="text-red-500 mb-2 font-normal" style={{ fontSize: "14px"}}>{passwordError}</p>}
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3CB44A] hover:bg-[#24692d]"
                      >
                        Register
                      </button>


                      <div className={`${styles.noramlFlex} w-full mt-5`}>
                        <h6 className="font-medium">
                          Already have a buyer account?
                        </h6>
                        <Link
                          to="/login"
                          className="text-[#3CB44A] pl-2 font-medium hover:text-[#24692d]"
                        >

                          Login Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegister;



