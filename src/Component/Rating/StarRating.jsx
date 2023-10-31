import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const starIcons = [];
  const integerRating = Math.floor(rating); 
  const decimalRating = rating - integerRating; 

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

  return <div className="flex">{starIcons}</div>;
};

export default StarRating;