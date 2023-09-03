import React, { useState } from 'react';
import product_1 from "../../Images/product_1.jpg";
import product_1_1 from "../../Images/product_1_1.jpg";
import product_1_2 from "../../Images/product_1_2.jpg";
import {
  FaMapMarkerAlt,
  FaTruck,
  FaMoneyBillWave,
  FaComments,
} from 'react-icons/fa';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    product_1,
    product_1_1,
    product_1_2,
  ];

  const plusSlides = (n) => {
    showSlides(currentIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slides.length;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto p-4 bg-[#D9D9D9]">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Rectangle: Photos */}
        <div className="col-span-1">
            <div className="border rounded p-4 mb-4  max-h-[22rem] bg-white">
                
                <div className="carousel-container max-w-2xl relative p-2 sm:p-4">
                {slides.map((src, index) => (
                    <div
                        key={index}
                        className={`images fade ${index + 1 === currentIndex ? '' : 'hidden'}`}
                        >
                        <img src={src} alt={`Image ${index + 1}`} className="w-full" />
                    </div>
                ))}

                <a
                    className="previous absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md cursor-pointer"
                    onClick={() => plusSlides(-1)}
                >
                    ❮
                </a>

                <a
                    className="next absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md cursor-pointer"
                    onClick={() => plusSlides(1)}
                >
                    ❯
                </a>

                    <div className="text-center">
                        {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`navigation-dot cursor-pointer h-15px w-15px m-0-2px rounded-full inline-block transition duration-600 ${
                            index + 1 === currentIndex ? 'active bg-[#717171]' : 'bg-[#bbb]'
                            }`}
                            onClick={() => currentSlide(index + 1)}
                        ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Middle Rectangle: Product Info */}
        <div className="col-span-1">
        <div className="border rounded p-4 mb-4 bg-[#badfa2]">
          <h2 className="text-3xl font-bold mb-2">Passion Fruit</h2>
          <div className="flex items-center mb-2">
            {/* Yellow stars for ratings */}
            
            <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-600 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-600 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-600 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-600 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p class="ml-2 text-sm font-medium text-black-500 dark:text-black-400">4.95 out of 5</p>
                </div>

          </div>
          
          <div className="font-semibold" > Category : Fruit </div>
          <div className="mb-2 font-bold text-2xl">Price: Rs. 548/kg</div>
          <div className="mb-2">
            {/* Quantity buttons */}
            <button
              className="border border-black p-1"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="border border-black p-1"
              onClick={increaseQuantity}
            >
              +
            </button>
            </div>
            <div className='whitespace-break-spaces'>   </div>
            <div className="mb-2 text-lg font-semibold">
                Description:<br />
                Specification:<br />
                Stock:
            </div>
        
          <button className="bg-[#0A9351] justify-items-center text-white py-2 px-4 h-35 w-80 rounded-full hover:bg-indigo-800">
            Add to Cart
          </button>
        </div>
        </div>

        {/* Right Rectangles: Delivery and Shop */}
        <div className="col-span-1">
          {/* Delivery Section */}
          <div className="border rounded p-4 mb-4 bg-[#FAFAFA]">
            <h2 className="text-xl font-bold mb-2">Delivery</h2>
            <div className="flex items-center mb-2">
              {/* Delivery icon */}
              <div className="mr-2">
                <FaMapMarkerAlt />
              </div>
              <div>Delivery Address</div>
              <button className="ml-auto text-blue-500">Change</button>
            </div>
            <div className="flex items-center mb-2">
              {/* Delivery icon */}
              <div className="mr-2">
                <FaTruck />
              </div>
              <div>Estimated Delivery Date</div>
              <div className="ml-auto">Delivery Cost</div>
            </div>
            <div className="flex items-center">
              {/* Money icon */}
              <div className="mr-2">
                <FaMoneyBillWave />
              </div>
              <div>Payment Method</div>
              <button className="ml-auto text-blue-500">Change</button>
            </div>
          </div>

          {/* Shop Section */}
          <div className="border rounded p-4 bg-[#FAFAFA]">
            <div><h2 className="text-xl font-bold mb-2">Shop Name</h2></div>
            <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-[#0A9351] rounded-full focus:shadow-outline hover:bg-indigo-800">
                <div>
                    <FaComments />
                </div>
              </button>
            <div className="mt-2">
              {/* Yellow stars for shop rating */}
              
                
                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p class="ml-2 text-sm font-medium text-black-500 dark:text-black-400">4.95 out of 5</p>
                </div>


            </div>
            <button className="bg-[#0A9351] text-white py-2 px-4 rounded-full mt-2 hover:bg-indigo-800">
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
