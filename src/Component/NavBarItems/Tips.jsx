import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";


const Tips = () => {
  const expertTips = [
    {
      title: 'Tip 1: Soil Preparation',
      content: 'Properly prepare your soil by testing its pH and nutrient levels. Adjust the soil accordingly to ensure the best conditions for your crops.'
    },
    {
      title: 'Tip 2: Crop Rotation',
      content: 'Rotate your crops each season to prevent soil depletion and reduce the risk of pests and diseases.'
    },
    {
      title: 'Tip 3: Watering Techniques',
      content: 'Learn the specific watering needs of different crops. Over or underwatering can harm your plants.'
    },
    {
      title: 'Tip 4: Pest Control',
      content: 'Implement organic pest control methods to protect your crops without harmful chemicals.'
    },
    {
      title: 'Tip 5: Harvesting Tips',
      content: 'Harvest your crops at the right time to maximize flavor and nutritional value. Refer to our harvest guide for more details.'
    },
  ];


  return (
    <div>
        <Header />
        <Navbar />
        <div className="bg-white rounded-lg p-4 shadow-md ">
              <h1 className="text-3xl font-semibold text-green-500 mt-32 mb-8">Expert Tips</h1>
              <p className="text-gray-600 text-lg mb-6">
                Discover valuable tips and advice from agricultural experts to help you achieve a successful harvest.
              </p>

              {expertTips.map((tip, index) => (
                <div key={index} className="mb-6">
                  <div className="bg-green-100 rounded-lg p-4">
                    <h2 className="text-2xl font-semibold mb-3 text-green-600">{tip.title}</h2>
                    <p className="text-gray-700">{tip.content}</p>
                  </div>
                </div>
              ))}

            <div className="text-right">
              <a
                href="https://agrounik.com/agronomy-tips/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
              >
                More Tips...
              </a>
            </div>
          </div>
        <Footer />
    </div>
  );
}

export default Tips;