import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../Rating/StarRating';

const ShopCard = ({ key, name, image, rating,href }) => {

  return (
    <>
      <Link to={`${href}`} className="block">
      {/* Wrap the card with a Link */}
        <div key={key} className="rounded-lg h-full bg-slate-100 p-4 shadow-2xl border hover:bg-opacity-90
        dark:bg-slate-100 opacity-90 hover:opacity-100">
          <img src={image} alt={name} className="w-full h-50 object-cover mb-2 rounded-lg border" />
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center">
            <p className="text-gray-500">Rating:</p>
            <div className="ml-1 flex">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ShopCard

