import { React, useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import StarRating from "../Rating/StarRating";
import { server } from "../../server";

export default function AllCategories(user_id) {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch(`${server}/api/product/getEquipments`, {
      method: "GET", 
    })
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.products);
    })

  }, []);

    const cardsPerPage = 25;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(products.length / cardsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="bg-[#d9eada] p-20">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Equipments
          </h2>
  
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
            {displayedProducts.map((product) => (
              <div key={product.product_id} className="group relative bg-white bg-opacity-50 p-1 rounded-xl">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[12rem]">
                  <img
                    src={`${server}/${product.image}`}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    style={{ minHeight: '200px', maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold  text-gray-700">
                      <a href=''>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.shop_name}</p>
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
        </div>
        <div className="py-2">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
  