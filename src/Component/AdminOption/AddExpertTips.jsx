import React, { useState } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AddExpertTips = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  const handleAdding = async (e) => {
    e.preventDefault();

    const expertTipsData = {
      header: header,
      content: content,
    };

    try {
      const response = await axios.post(
        `${server}/api/expert-tips/add-expert-tip`,
        expertTipsData
      );

      // Check the response from the server and handle success or errors accordingly
      if (response.status === 201) {
        toast.success("Expert Tip added successfully!");
        setHeader("");
        setContent("");
      } else {
        toast.error("Failed to add Expert Tip. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-0 p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Expert Tips</h2>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Header</h4>
        <input
          type="text"
          name="header"
          value={header}
          placeholder="Enter the Expert Tips Header"
          onChange={(e) => setHeader(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A]"
          required
        />
      </div>

      <div className="mb-4 relative">
        <h4 className="text-lg font-semibold">Content</h4>
        <textarea
          name="content"
          value={content}
          placeholder="Enter the Expert Tips Content"
          onChange={(e) => setContent(e.target.value)}
          className="border rounded-md p-2 w-full border-gray-300 focus:border-[#3CB44A] h-36"
          required
        />
      </div>

      <button
        onClick={handleAdding}
        className="bg-[#3da749] hover:bg-[#296b33] text-white rounded-3xl py-2 px-4 mt-2"
      >
        Add Expert Tips
      </button>
    </div>
  );
};

export default AddExpertTips;
