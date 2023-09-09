import React from "react";

const ShopDashborad = () => {
  return (
    <div className="md:w-3/4 mx-2 mt-2 md:mx-6">
      {/* Right Upper Rectangle */}
      <div className="max-w-full h-48 bg-white rounded-lg p-4 shadow-md mb-4 ">
        {/* Address */}
        <h2 className="text-xl font-semibold">Shop Address</h2>
        <p className="text-gray-600 mt-2">
          Shop Number <br />
          Street
          <br />
          City
          <br />
          District
          <br />
          Phone: (123) 456-7890
        </p>
      </div>

      {/* Right Down Rectangle */}
      {/* <div className="my-4 py-2 items-center bg-white rounded-lg shadow-md border border-green-700">
        <ShopSettingItems />
      </div> */}
    </div>
  );
};

export default ShopDashborad;