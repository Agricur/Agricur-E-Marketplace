import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../Rating/StarRating';
import { server } from "../../server";

const ShopCard = ({ shop_id, name, image, rating }) => {

  return (
    <>
      <Link to={`/ShopHome/${shop_id}`} className="block">
        <div key={shop_id} className="rounded-lg h-full bg-slate-100 p-4 shadow-2xl border hover:bg-opacity-90
        dark:bg-slate-100 opacity-90 hover:opacity-100">
          <img src={`${server}/${image}`} alt={name} className="w-full h-50 object-cover mb-2 rounded-lg border"   style={{ minHeight: '200px', maxHeight: '200px', objectFit: 'cover' }}/>
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

