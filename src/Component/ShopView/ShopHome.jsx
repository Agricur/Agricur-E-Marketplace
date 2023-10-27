// ShopPage.js
import { React, useState, useEffect } from "react";
import ShopDetail from "./ShopDetail";
import ShopItems from "./ShopItems";
import ShopImg from '../../Images/shop.jpg'
import { server } from "../../server";

const ShopHome = (shopID) => {
  const shop_id = shopID.shopID;
  console.log(shop_id);

  // Sample shop data
  const shopData = {
    shopName: "Shop Name",
    shopImage: ShopImg,
    ratings: 4.8,
    // followers: 1000,
    // motto: "Your shop's motto goes here...",
    
  };

  const [shopName,setshopName] = useState("");
  const [shopImage,setshopImage] = useState("");
  const [ratings,setratings] = useState("");
  const [shopProduct,setShopProducts] = useState([]);
  const [shopDescription,setShopDescription] = useState([]);

  

  useEffect(() => {
   
    fetch(`${server}/api/shop/getShopDetails/${shop_id}`, {
      method: "GET", 
    })
    .then((response) => response.json()) 
    .then((data) => {
      setshopName(data.shop.shop_name);
      setshopImage(data.shop.image);
      setShopProducts(data.shop.products);
      setShopDescription(data.shop.description);
      console.log(data.shop);
    })
   

  }, [shop_id]);


  return (

    <div> 
      <ShopDetail
        shopName={shopName}
        shopImage={`${server}/${shopImage}`}
        ratings={4}
        // followers={shopData.followers}
        motto={shopDescription}
        
      />

      <ShopItems product={shopProduct}/>
        
    </div>
  );
};

export default ShopHome;
