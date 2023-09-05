import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Design from "../../Images/Design.png";
import Background from "../../Images/regBackground.png";

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    houseNo: '',
    street: '',
    addressCity: '',
    district: '',
    phoneNumber: '',
    password: '',
    rePassword: '',
  });

  const districts = [
    'Colombo',
    'Gampaha',
    'Kalutara',
    'Kandy',
    'Matale',
    'Nuwara Eliya',
    'Galle',
    'Matara',
    'Hambantota',
    'Jaffna',
    'Kilinochchi',
    'Mannar',
    'Vavuniya',
    'Mullaitivu',
    'Batticaloa',
    'Ampara',
    'Trincomalee',
    'Kurunegala',
    'Puttalam',
    'Anuradhapura',
    'Polonnaruwa',
    'Badulla',
    'Moneragala',
    'Ratnapura',
    'Kegalle',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  return (
    
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white bg-opacity-80 p-4 sm:p-1 rounded-lg shadow-lg w-3/5 max-w-screen-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-8"></h1>
            <h1 className="text-3xl font-bold mb-4">Sign up to Agricur</h1>
            <img src={Design} alt="" height="100" width="100" className="mx-auto" />
            <h5 className="text-lg font-normal mb-2">Please enter your details below</h5>
          
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="md:w-1/2">
                <div className="mb-4">
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-black rounded-md py-2 px-3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Second Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-black rounded-md py-2 px-3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-black rounded-md py-2 px-3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Address</label>
                  <input
                    type="text"
                    name="houseNo"
                    value={formData.shopNo}
                    onChange={handleChange}
                    placeholder="House Number"
                    className="w-full border border-black rounded-md py-2 px-3 mb-2"
                    required
                  />
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street"
                    className="w-full border border-black rounded-md py-2 px-3 mb-2"
                    required
                  />
                  <div className="flex">
                    <input
                      type="text"
                      name="addressCity"
                      value={formData.addressCity}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full border border-black rounded-md py-2 px-3 mb-2 mr-2"
                      required
                    />
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="border border-black rounded-md py-2 px-3 mb-2"
                      required
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
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
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-black rounded-md py-2 px-3"
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
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-black rounded-md py-2 px-3 pr-10"
                        required
                      />
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-2.5 cursor-pointer"
                          size={18}
                          onClick={() => setPasswordVisible(false)}
                        />
                      ) : (
                        <AiOutlineEye
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
                            value={formData.rePassword}
                            onChange={handleChange}
                            className="w-full border border-black rounded-md py-2 px-3 pr-10"
                            required
                          />
                          {rePasswordVisible ? (
                            <AiOutlineEyeInvisible
                              className="absolute right-2 top-2.5 cursor-pointer"
                              size={18}
                              onClick={() => setRePasswordVisible(false)}
                            />
                          ) : (
                            <AiOutlineEye
                              className="absolute right-2 top-2.5 cursor-pointer"
                              size={18}
                              onClick={() => setRePasswordVisible(true)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3CB44A] hover:bg-[#24692d]"
                      >
                        Register
                      </button>
                      <p className="mt-4 text-gray-600 text-sm">
                        Already have an account? 
                        <button type="button" class=" text-black font-bold py-2 px-4 rounded">  
                          Login Now
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
    </div>
  );
};

export default BuyerRegister;
