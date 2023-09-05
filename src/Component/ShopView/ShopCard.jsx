import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../Rating/StarRating';

const ShopCard = ({ key, name, image, rating }) => {

  return (
    <>
      <Link to={`/shop/${key}`} className="block">
      {/* Wrap the card with a Link */}
        <div key={key} className="rounded-lg bg-slate-100 p-4 shadow-2xl border border-green-700 hover:bg-white 
        dark:bg-slate-100 dark:border-green-700 opacity-90 hover:opacity-100">
          <img src={image} alt={name} className="w-full h-50 object-cover mb-2 rounded-lg border border-green-700" />
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

