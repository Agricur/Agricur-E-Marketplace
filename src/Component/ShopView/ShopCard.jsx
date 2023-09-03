import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa"; // Import star icons from react-icons

const ShopCard = ({ key, name, image, rating }) => {

  const renderRatingStars = (rating) => {
    const maxRating = 5;
    const starIcons = [];
    const integerRating = Math.floor(rating); // Extract the integer part of the rating
    const decimalRating = rating - integerRating; // Extract the decimal part of the rating

    for (let i = 1; i <= maxRating; i++) {
      if (i <= integerRating) {
        // Render filled star for integer part
        starIcons.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === integerRating + 1 && decimalRating >= 0.5) {
        // Render half star for decimal rating >= 0.5
        starIcons.push(<FaStarHalf key={i} className="text-yellow-500" />);
      } else {
        // Render empty star for remaining stars
        starIcons.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }

    return starIcons;
  };

  return (
    <>
      <Link to={`/shop/${key}`} className="block">
      {/* Wrap the card with a Link */}
        <div key={key} className="rounded-lg bg-slate-100 p-4 shadow border border-gray-700 hover:bg-white dark:bg-slate-100 dark:border-gray-700">
          <img src={image} alt={name} className="w-full h-32 object-cover mb-2 rounded-lg" />
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center">
            <p className="text-gray-500">Rating:</p>
            <div className="ml-1 flex">
              {renderRatingStars(rating)}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ShopCard

