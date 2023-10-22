import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { server } from "../../server";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    fetch(`${server}/api/product/getAllProducts`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products);
      });

  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      // Reset search results when the search term is empty
      setSearchResults([]);
      return;
    }

    // Check if the search term matches a category name
    const categoryMatch = productData.filter((product) =>
      product.category.toLowerCase().includes(term.toLowerCase())
    );

    const productMatch = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );


    if (categoryMatch.length > 0) {
      // Display all products related to the matching category
      setSearchResults(categoryMatch);
    } else {
      setSearchResults(productMatch);
    }
  };

  // Helper function to highlight search term in a string
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold", backgroundColor: "#3da749" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div data-testid="searchbar" className="w-full md:w-[50%] relative">
      <form>
        <div className="relative py-1.5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={handleSearch}
            value={searchTerm}
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-[#348d43] rounded-full bg-gray-50 focus:ring-[#348d43] focus:border-[#348d43] dark:bg-white dark:border-[#b0c9b3] dark:placeholder-gray-400 dark:text dark:focus:ring-[#348d43] dark:focus:border-[#348d43]"
            placeholder="Search here ..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-[0.3rem] bottom-[0.635rem] bg-[#3da749] hover:bg-[#296b33] focus:ring-4 focus:outline-none focus:ring-[#348d43] font-medium rounded-full text-sm px-4 py-2 dark:bg-[#3da749] dark:hover:bg-[#296b33] dark:focus:ring-[#348d43]"
          >
            Search
          </button>
        </div>
      </form>
      {/* Display search results as a dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute mt-2 p-2 bg-white border border-gray-300 shadow-lg rounded-lg w-full max-h-[250px] md:max-h-[500px] overflow-y-auto">
          {searchResults.slice(0, 50).map((result) => (
            <Link
              to={`/item/${result.product_id}`}
              key={result.id}
              className="p-2 hover:bg-[#d9eada] rounded-md flex items-center justify-between"
            >
              <div className="flex items-center font-semibold">
                {result.image ? (
                  <img
                    src={`${server}/${result.image}`}
                    alt={result.name}
                    className="w-8 h-8 mr-2"
                  />
                ) : (
                  <svg
                    className="w-3 h-3 ml-3 mr-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                )}
                <div className="flex-col">
                {highlightText(result.name, searchTerm) }
                <div className="text-gray-600 text-xs font-semibold">
                    
                  {highlightText(result.category, searchTerm)}
                </div>
                </div>
                
              </div>

              <div className="text-gray-600 text-xs font-semibold mt-1">
                {highlightText(result.shop_name, searchTerm)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
