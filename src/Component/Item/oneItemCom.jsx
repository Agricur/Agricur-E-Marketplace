import React, { useEffect, useState } from "react";
import StarRating from "../Rating/StarRating";
import { server } from "../../server";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaTruck,
  FaMoneyBillWave,
  FaComments,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isRatingPopupVisible, setRatingPopupVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [userId, setuserID] = useState("");
  const [stars, setStars] = useState(0);
  const [sellingWeights, setSellingWeights] = useState("");

  const userCookie = Cookies.get("jwtToken");

  const productID = useParams().ProductId;

  const slides = [props.item.image, props.item.image2, props.item.image];

  const navigate = useNavigate();

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
          setuserID(data.user_id);
        });
    }
  }, [userCookie]);

  useEffect(() => {
    fetch(`${server}/api/product/getRating/${productID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setRating(parseFloat(data.rating.rating));
        // setRating(1.2)
      });
  }, [stars]);

  const handlePrice = () => {
    if (sellingWeights === "") {
      return props.item.price;
    } else {
      let data = sellingWeights.split("g");
      data = data[0].split("k");
      if (props.item.price_unit === "/kg" && data.length === 1) {
        return (parseFloat(props.item.price * data[0]) / 1000).toFixed(2);
      } else {
        return parseFloat(props.item.price * data[0]).toFixed;
      }
    }
  };

  const getWeightInKg = () => {
    let data = sellingWeights.split("g");
    data = data[0].split("k");
    if (sellingWeights === "") {
      return 1;
    } else {
      if (data.length === 1) {
        return parseFloat(data[0] / 1000);
      } else {
        return parseFloat(data[0]);
      }
    }
  };

  const handleOpenRatingPopup = () => {
    setRatingPopupVisible(true);
  };

  const handleCloseRatingPopup = () => {
    setRatingPopupVisible(false);
  };

  const handleSubmitRating = async () => {
    setRatingPopupVisible(false);

    const data = {
      rating: rating,
      user_id: userId,
    };

    await axios
      .post(`${server}/api/product/addRating/${props.item.product_id}`, data)
      .then((response) => {
        toast.success("Rating added successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRatingChange = (newRating) => {
    // setStars(newRating);
    setRating(newRating);
  };

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

  const handleAddToCart = () => {
    // Retrieve the current cart from localStorage
    var currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    let newItem;
    // Create a new item for the cart
    if (props.item.price_unit === "/kg") {
      newItem = {
        product_id: props.item.product_id,
        name: props.item.name,
        price: handlePrice(),
        image: props.item.image,
        quantity: getWeightInKg(),
        quantity_unit: props.item.quantity_unit,
      };
    } else {
      newItem = {
        product_id: props.item.product_id,
        name: props.item.name,
        price: props.item.price,
        quantity: quantity,
        image: props.item.image,
        quantity_unit: props.item.quantity_unit,
      };
    }

    let items = 0;
    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i].product_id === newItem.product_id) {
        if (props.item.price_unit === "/kg") {
          currentCart[i].quantity = newItem.quantity;
        } else {
          currentCart[i].quantity += newItem.quantity;
        }
        localStorage.setItem("cart", JSON.stringify(currentCart));
        if (!userCookie) {
          toast.success("Product added to the cart");
        }
      } else {
        items += 1;
      }
    }
    if (items === currentCart.length) {
      currentCart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(currentCart));
      if (!userCookie) {
        toast.success("Product added to the cart");
      }
    }

    if (userCookie) {
      console.log(currentCart);
      fetch(`${server}/api/cart/insertProduct`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userCookie}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentCart,
        }),
      })
        .then((response) => response.json())
        .then((message) => {
          toast.success(message.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // window.location.reload();
  };

  const handleBuyNow = () => {
    if (quantityUnits === "units") {
      navigate(`/checkout/${props.item.product_id}/${quantity}/${quantity * props.item.price}`);
    } else {
      if (sellingWeights === undefined || sellingWeights === "") {
        toast.error("Please select a quantity");
      }else{
      navigate(`/checkout/${props.item.product_id}/${sellingWeights}/${handlePrice()}`);
      }
    }
  };

  const quantityUnits = props.item.quantity_unit;

  return (
    <>
      {quantityUnits !== undefined ? (
        <div className="container mx-auto p-4 bg-[#D9D9D9] relative">
          <div className="grid grid-cols-1 mt-32 md:grid-cols-3 gap-4">
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
                <h2 className="text-3xl font-bold mb-2">{props.item.name}</h2>
                <div className="flex items-center mb-2">
                  <div
                    className="flex items-center"
                    onClick={handleOpenRatingPopup}
                  >
                    <StarRating rating={rating} />
                    <p className="ml-2 text-sm font-medium text-black-500 dark:text-black-400">
                      {rating} out of 5
                    </p>
                  </div>
                </div>

                <div className="font-semibold">{props.item.category}</div>
                <div className="mb-2 font-bold text-2xl">
                  LKR. {handlePrice()}{" "}
                  {sellingWeights === "" ? props.item.price_unit : ""}
                </div>
                <div className="mb-2">
                  {quantityUnits === "units" ? (
                    /* Quantity buttons for 'unit' */
                    <>
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
                    </>
                  ) : (
                    /* Selection panel for 'grams' or 'kg' */

                    <select
                      onChange={(e) => setSellingWeights(e.target.value)}
                      className="rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Quantity</option>
                      {props.item.selling_quantities.map((quantity) => (
                        <option value={quantity}>{quantity}</option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="mb-2 text-lg font-semibold">
                  Description:
                  <br />
                  Stock: {props.item.quantity} {props.item.quantity_unit}
                </div>

                <div className="flex justify-between">
                  <button onClick={handleBuyNow}className="bg-[#3da749] justify-items-center text-white md:h-12 sm:h-12 m-2 rounded-full hover:bg-[#296b33] px-16 sm:px-12 md:px-8 lg:px-12 xl:px-16">
                    Buy Now
                  </button>

                  <button
                    onClick={handleAddToCart}
                    className="bg-[#3da749] justify-items-center text-white lg:h-12 md:h-12  sm:h-12 m-2 rounded-full hover:bg-[#296b33] px-16 sm:px-12 md:px-8 lg:px-12 xl:px-16"
                  >
                    Add to Cart
                  </button>
                </div>
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
                  <h2 className="text-xl font-bold mb-2">
                    {props.item.shop_name}
                  </h2>
                </div>
                <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-[#3da749] rounded-full focus:shadow-outline hover:bg-[#296b33]">
                  <div>
                    <FaComments />
                  </div>
                </button>
                <div className="mt-2">
                  <div class="flex items-center">
                    {/* Add more stars here based on your shop rating */}
                    <StarRating rating={3} />
                    <p class="ml-2 text-sm font-medium text-black-500 dark:text-black-400">
                      3 out of 5
                    </p>
                  </div>
                </div>
                <Link to="/shophome">
                  <button className="bg-[#3da749] text-white py-2 px-4 rounded-full mt-2 hover:bg-[#296b33]">
                    Visit Store
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {isRatingPopupVisible && userCookie && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <span
                  className="absolute top-0 right-0 m-4 cursor-pointer"
                  onClick={handleCloseRatingPopup}
                >
                  &times;
                </span>
                <h3 className="text-xl font-semibold mb-2">Add Star Rating</h3>
                <div className="star-rating">
                  <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    starHoverColor="gold"
                    changeRating={handleRatingChange}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="5px"
                  />
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    onClick={handleCloseRatingPopup}
                    className="bg-red-500 text-white px-4 py-1 rounded-3xl hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitRating}
                    className="bg-[#3da749] text-white px-4 py-1 rounded-3xl hover:bg-[#296b33]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductDetailPage;
