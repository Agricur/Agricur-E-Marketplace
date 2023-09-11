import React, { useEffect, useState } from "react";
import image from "../../Images/hero.jpg";
import Pagination from "../Pagination/Pagination";
import ShopItemEdit from "./ShopItemEdit";
import AddProductForm from "./AddProduct";
import { server } from "../../server";
import axios from "axios";

const ProductHandle = ({user_id}) => {
  const [shopItems, setShopItems] = useState([
    {
      id: 1,
      name: "Item 1",
      image: image,
      available: 400,
      sold: 100,
      rating: 4.8,
      price: 20.99,
    },
    {
      id: 2,
      name: "Item 2",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 15.49,
    },
    {
      id: 3,
      name: "Item 3",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 13.49,
    },
    {
      id: 4,
      name: "Item 4",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 11.49,
    },
    {
      id: 5,
      name: "Item 5",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 14.49,
    },
    {
      id: 6,
      name: "Item 6",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 7,
      name: "Item 7",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 8,
      name: "Item 8",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 9,
      name: "Item 9",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 10,
      name: "Item 10",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 11,
      name: "Item 11",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 12,
      name: "Item 12",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 13,
      name: "Item 13",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    {
      id: 14,
      name: "Item 14",
      image: image,
      available: 400,
      sold: 50,
      rating: 4.5,
      price: 18.49,
    },
    // Add more items here
  ]);

  // console.log(user_id);
  useEffect(() => {
    // console.log(user_id);
    fetch(`${server}/api/shop/getProducts/${user_id}`, {
      method: "GET", 
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.products); 
      setShopItems(data.products);
    })

  }, [user_id]);

  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 8;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedItems = shopItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(shopItems.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      {showAddProductForm ? (
        // Display the AddProductForm when showAddProductForm is true
        <AddProductForm onBack={toggleAddProductForm} user_id={user_id} />
      ) : (
        // Display My Products section when showAddProductForm is false
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Products</h2>
            <button
              onClick={toggleAddProductForm} // Toggle the form when the button is clicked
              className="bg-[#3da749] hover:bg-[#296b33] text-white font-semibold px-4 py-2 rounded-3xl"
            >
              Add New Product
            </button>
          </div>

          <div className="grid grid-cols-2 gap-[10px] mx-4 md:mx-8 sm:mx-6 md:grid-cols-2 md:gap-[12px] lg:grid-cols-4 lg:gap-[14px]">
            {displayedItems.map((item) => (
              <ShopItemEdit
                key={item.product_id}
                // item={item}
                itemName={item.name}
                itemImage={`${server}/${item.image}`}
                soldItems={7}
                availableItems={10}
                itemRating={4}
                price={item.price}
                price_unit={item.price_unit}
              />
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
      )}
    </div>
  );
};

export default ProductHandle;
