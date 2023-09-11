import { React, useState } from "react";
import Pagination from "../Pagination/Pagination";
import StarRating from "../Rating/StarRating";

const products = [
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.4,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.9,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.1,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.0,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.4,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.9,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.1,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.0,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.4,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.9,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.1,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.0,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.1,
  },
  {
    id: 1,
    name: "Tomato",
    href: "#",
    imageSrc:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60",
    imageAlt: "Tomato",
    price: "Rs.150.00/kg",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mammoty",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuvsKhBzfvD4Uf-HH_wov_ieeHZOMSlQimg&usqp=CAU",
    imageAlt: "Mammoty",
    price: "Rs.1500.00",
    color: "Shop C",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "White Rice",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqlbjF6cVbOpIha4z_f3LZX-pZ9vneSk-w&usqp=CAU",
    imageAlt: "white rice",
    price: "Rs.200.00/kg",
    color: "Araliya",
    ratings: 4.7,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Lady Fingers",
    href: "#",
    imageSrc:
      "https://thefarmette.pk/cdn/shop/products/image_95d2470c-808c-4ca6-91a2-9119f0695f02_316x260.jpg?v=1652616245",
    imageAlt: "Lady Fingers",
    price: "Rs.100.00/kg",
    color: "Shop X",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.0,
  },
  {
    id: 1,
    name: "Carrots",
    href: "#",
    imageSrc:
      "https://www.knowyourproduce.com/wp-content/uploads/2022/08/how-to-grow-carrots-2.png",
    imageAlt: "Carrots",
    price: "Rs.350.00/kg",
    color: "Shop A",
    ratings: 4.5,
  },
  {
    id: 1,
    name: "Mango",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Qw_fJBEuUQTuugAxHZpimeXkykOdQfc4w&usqp=CAU",
    imageAlt: "Mango",
    price: "Rs.500.00/kg",
    color: "Shop B",
    ratings: 4.7,
  },
  
];

export default function AllProducts() {
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
      <div className="bg-[#d9eada]">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Products
          </h2>
  
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group relative bg-white bg-opacity-50 p-1 rounded-xl">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[12rem]">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                    style={{ minHeight: '200px', maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-[#3da749]">
                    {product.price}
                  </p>
                </div>
                <div className="flex justify-start items-center mt-2">
                  <StarRating rating={product.ratings} />
                  <p className="text-gray-600 ml-2">{product.ratings}</p>
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
  