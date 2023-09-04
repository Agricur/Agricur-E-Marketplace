// ShopPage.js
import React from "react";
import ShopDetail from "./ShopDetail";
import ShopItems from "./ShopItems";
import ShopImg from '../../Images/shop.jpg'
import ProductImg from '../../Images/product_1.jpg'

const ShopHome = () => {
  // Sample shop data
  const shopData = {
    shopName: "Shop Name",
    shopImage: ShopImg,
    ratings: 4.5,
    followers: 1000,
    motto: "Your shop's motto goes here...",
    items: [
      { id: 1, name: "Item 1", image: ProductImg, sold: 100, rating: 4.8, price: 20.99 },
      { id: 2, name: "Item 2", image: ProductImg, sold: 50, rating: 4.5, price: 15.49 },
      { id: 3, name: "Item 3", image: ProductImg, sold: 50, rating: 4.5, price: 13.49 },
      { id: 4, name: "Item 4", image: ProductImg, sold: 50, rating: 4.5, price: 11.49 },
      { id: 5, name: "Item 5", image: ProductImg, sold: 50, rating: 4.5, price: 14.49 },
      { id: 6, name: "Item 6", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
      { id: 7, name: "Item 7", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
      { id: 8, name: "Item 8", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
      { id: 9, name: "Item 9", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },   
      { id: 10, name: "Item 10", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
      { id: 11, name: "Item 11", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
      { id: 12, name: "Item 12", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
      { id: 13, name: "Item 13", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },
      { id: 14, name: "Item 14", image: ProductImg, sold: 50, rating: 4.5, price: 18.49 },       
      // Add more items here
    ],
  };

  return (
    <div>
      <ShopDetail
        shopName={shopData.shopName}
        shopImage={shopData.shopImage}
        ratings={shopData.ratings}
        followers={shopData.followers}
        motto={shopData.motto}
      />

      <ShopItems items={shopData.items} />

    </div>
  );
};

export default ShopHome;
