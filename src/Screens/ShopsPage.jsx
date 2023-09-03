import React, {useState} from "react";
import Header from "../Component/Layout/Header";
import Navbar from "../Component/Layout/Navbar";
import Shopsview from "../Component/ShopView/ShopsView";
import Footer from "../Component/Layout/Footer";
import Pagination from "../Component/Pagination/Pagination";
import Img from '../Images/herow.jpg'

const ShopsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  return (
    <div className="bg-cover" style={{backgroundImage:`url(${Img})`}}>
      <Header />
      <Navbar />
      <Shopsview />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default ShopsPage;
