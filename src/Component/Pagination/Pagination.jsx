import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center my-8">
      <button
        onClick={handlePrevious}
        className={`${
          currentPage === 1
            ? "bg-white text-gray-700"
            : "bg-green-500 text-white"
        } rounded-full h-8 w-8 flex items-center justify-center mx-1 focus:outline-none`}
      >
        {"<"}
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`${
            currentPage === pageNumber
              ? "bg-green-500 text-white"
              : "bg-white hover:bg-gray-400 text-gray-700"
          } rounded-full h-8 w-8 flex items-center justify-center mx-1 focus:outline-none`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={handleNext}
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-700"
            : "bg-green-500 text-white"
        } rounded-full h-8 w-8 flex items-center justify-center mx-1 focus:outline-none`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
