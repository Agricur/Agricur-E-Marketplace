import React,{useEffect,useState} from 'react'
import Header from '../Component/Layout/Header'
import Navbar from '../Component/Layout/Navbar'
import Footer from '../Component/Layout/Footer'
import OneItem from '../Component/Item/oneItemCom'
import { useParams } from "react-router-dom";
import { server } from "../server";

const OneItemPage = () =>{
    const productId = useParams();
    // const [itemData, setItemData] = useState([]);
    const [itemData, setItemData] = useState('');
    useEffect(() => {
      fetch(`${server}/api/product/getProduct/${productId.ProductId}`, {
        method: "GET", 
      })
      .then((response) => response.json())
      .then((data) => {
      setItemData(data.product);
      })
  
    }, [productId.ProductId]);

  
    return (
      <div>
        <Header />
        <Navbar />
        
        <div>
            <OneItem item={itemData} />
        </div> 
        <Footer />
      </div>
    );
  };
  
  export default OneItemPage;
