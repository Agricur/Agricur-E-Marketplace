import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import StarRating from "../Rating/StarRating";
import { server } from "../../server";

const ShopItems = (props) => {
  const products = props.product;

  const cardsPerPage = 20; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of cards to display for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedItems = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#d9eada]">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Available Products
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
          {displayedItems.map((product) => (
            <div
              key={product.product_id}
              className="group relative bg-white bg-opacity-50 p-1 rounded-xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[12rem]">
                <img
                  src={`${server}/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                  style={{
                    minHeight: "200px",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold  text-gray-700">
                    <Link to={`/item/${product.product_id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.shop_name}
                  </p>
                </div>
                <p className="text-sm font-medium text-[#3da749]">
                  {product.price} {product.price_unit}
                </p>
              </div>
              <div className="flex justify-start items-center mt-2">
                <StarRating rating={4.5} />
                <p className="text-gray-600 ml-2">{4.5}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
