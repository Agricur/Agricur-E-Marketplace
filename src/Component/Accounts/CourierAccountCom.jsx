import React, { useState } from 'react';
import profilePhoto from '../../Images/userImage.png';

const CourierAccountCom = () => {

    const [districts, setDistricts] = useState([
          {
            name: 'Colombo',
            charge: 200.00,
          },
          {
            name: 'Gampaha',
            charge: 250.00,
          },
          {
            name: 'Kalutara',
            charge: 180.00,
          },
          {
            name: 'Kandy',
            charge: 300.00,
          },
          {
            name: 'Matale',
            charge: 270.00,
          },
          {
            name: 'Nuwara Eliya',
            charge: 220.00,
          },
          {
            name: 'Galle',
            charge: 320.00,
          },
          {
            name: 'Matara',
            charge: 280.00,
          },
          {
            name: 'Hambantota',
            charge: 350.00,
          },
          {
            name: 'Jaffna',
            charge: 450.00,
          },
          {
            name: 'Kilinochchi',
            charge: 430.00,
          },
          {
            name: 'Mannar',
            charge: 400.00,
          },
          {
            name: 'Vavuniya',
            charge: 380.00,
          },
          {
            name: 'Mullaitivu',
            charge: 470.00,
          },
          {
            name: 'Batticaloa',
            charge: 290.00,
          },
          {
            name: 'Ampara',
            charge: 310.00,
          },
          {
            name: 'Trincomalee',
            charge: 260.00,
          },
          {
            name: 'Kurunegala',
            charge: 240.00,
          },
          {
            name: 'Puttalam',
            charge: 200.00,
          },
          {
            name: 'Anuradhapura',
            charge: 350.00,
          },
          {
            name: 'Polonnaruwa',
            charge: 320.00,
          },
          {
            name: 'Badulla',
            charge: 290.00,
          },
          {
            name: 'Moneragala',
            charge: 270.00,
          },
          {
            name: 'Ratnapura',
            charge: 340.00,
          },
          {
            name: 'Kegalle',
            charge: 310.00,
          },
      ]);
    
      const handleEditCharge = (districtName, newCharge) => {
        setDistricts((prevDistricts) =>
          prevDistricts.map((district) =>
            district.name === districtName ? { ...district, charge: newCharge } : district
          )
        );
      };
  return (
    <div className="bg-[#D9D9D9] rounded-lg shadow-md pt-36 pb-12">
        <div className='m-8'>
            <h1 className="text-3xl font-semibold mb-4">Courier Account</h1>
            <div className="rounded-full h-36 w-36 mx-auto">
              <img src={profilePhoto} alt="Profile" />
            </div>

          {/* Buyer Name */}
          <h2 className="text-xl text-center font-semibold mt-4">Courier's Name</h2>

          {/* Email Address */}
          <p className="text-gray-600 text-center text-sm mt-2">
            courier@example.com
          </p>

            <h2 className="text-2xl font-semibold mb-2">Delivery Charges</h2>
            <p className="text-gray-600 mb-4">Set your delivery charges for different districts.</p>
        
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {districts.map((district) => (
                <div key={district.name} className="bg-[#d9eada] rounded-lg p-4">
                    <div className='grid grid-cols-3'>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{district.name}</h3>
                        <p className="text-gray-700 mb-2">Current Charge: LKR {district.charge.toFixed(2)}</p>
                    </div>
                    <div className="flex space-x-2">
                    <input
                        type="number"
                        placeholder="New Charge"
                        className="p-2 border rounded-lg h-12 px-1"
                        onChange={(e) => {
                        const newCharge = parseFloat(e.target.value);
                        handleEditCharge(district.name, newCharge);
                        }}
                    />
                    <button className="bg-green-600 text-white  rounded-lg hover:bg-green-700 h-12 md:px-8 sm:px-12">
                        Save
                    </button>
                    </div>
                </div>
          </div>
        ))}
      </div>
      </div>
    </div>

  )
}

export default CourierAccountCom