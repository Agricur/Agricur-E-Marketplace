import React, { useState } from "react";
import StarRating from "../Rating/StarRating";
import { server } from "../../server";

import {
  FaMapMarkerAlt,
  FaTruck,
  FaMoneyBillWave,
  FaComments,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const ProductDetailPage = (item) => {
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [item.item.image, item.item.image2, item.item.image];

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Rectangle: Photos */}
        <div className="md:col-span-1">
          <div className="border rounded p-4 mb-4 bg-white">
            <div className="carousel-container max-w-2xl relative p-2 sm:p-4">
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`images fade ${
                    index + 1 === currentIndex ? "" : "hidden"
                  }`}
                >
                  <img
                    src={`${server}/${src}`}
                    alt={`Image ${index + 1}`}
                    className="w-full max-h-[22rem] max-w-full object-contain"
                  />
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
                      index + 1 === currentIndex
                        ? "active bg-[#717171]"
                        : "bg-[#bbb]"
                    }`}
                    onClick={() => currentSlide(index + 1)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Rectangle: Product Info */}
        <div className="md:col-span-1">
          <div className="border shadow-lg  rounded p-4 mb-4 bg-[#d9eada]">
            <h2 className="text-3xl font-bold mb-2">{item.item.name}</h2>
            <div className="flex items-center mb-2">
              <div class="flex items-center">
                <StarRating rating={4.95} />
                <p class="ml-2 text-sm font-medium text-black-500 dark:text-black-400">
                  4.95 out of 5
                </p>
              </div>
            </div>

            <div className="font-semibold">{item.item.category}</div>
            <div className="mb-2 font-bold text-2xl">
              {item.item.price}
              {item.item.price_unit}
            </div>
            <div className="mb-2">
              {/* Quantity buttons */}
              <button
                className="border p-1 border-black rounded-full"
                onClick={decreaseQuantity}
              >
                <FaMinus className="text-sm" />
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="border p-1 border-black rounded-full"
                onClick={increaseQuantity}
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
            <div className="mb-2 text-lg font-semibold">
              Description:
              <br />
              Specification:
              <br />
              Stock:
            </div>

            <button className="bg-[#3da749] justify-items-center text-white py-2 px-4 h-35 w-80 rounded-full hover:bg-[#296b33]">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Rectangles: Delivery and Shop */}
        <div className="md:col-span-1">
          {/* Delivery Section */}
          <div className="border rounded p-4 mb-4 bg-[#FAFAFA]">
            <h2 className="text-xl font-bold mb-2">Delivery</h2>
            <div className="flex items-center mb-2">
              <div className="mr-2">
                <FaMapMarkerAlt />
              </div>
              <div>Delivery Address</div>
              <button className="ml-auto text-blue-500">Change</button>
            </div>
            <div className="flex items-center mb-2">
              <div className="mr-2">
                <FaTruck />
              </div>
              <div>Estimated Delivery Date</div>
              <div className="ml-auto">Delivery Cost</div>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
                <FaMoneyBillWave />
              </div>
              <div>Payment Method</div>
              <button className="ml-auto text-blue-500">Change</button>
            </div>
          </div>

          {/* Shop Section */}
          <div className="border rounded p-4 bg-[#FAFAFA]">
            <div>
              <h2 className="text-xl font-bold mb-2">{item.item.shop_name}</h2>
            </div>
            <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-[#3da749] rounded-full focus:shadow-outline hover:bg-[#296b33]">
              <div>
                <FaComments />
              </div>
            </button>
            <div className="mt-2">
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  {/* Star SVG */}
                </svg>
                {/* Add more stars here based on your shop rating */}
                <StarRating rating={4.95} />
                <p class="ml-2 text-sm font-medium text-black-500 dark:text-black-400">
                  4.95 out of 5
                </p>
              </div>
            </div>
            <button className="bg-[#3da749] text-white py-2 px-4 rounded-full mt-2 hover:bg-[#296b33]">
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
