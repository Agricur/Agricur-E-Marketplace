import React from 'react';
import ShopNav from './ShopNavBar';
import ShopDashborad from './ShopDashborad';
import ShopProducts from './ShopProductHandle';

const ShopSettings = ({user_id}) => {
  // console.log(user_id);

  return (
    <div className="bg-gray-100 min-h-screen pb-8 pt-28">
      {/* Header */}
      {/* <header className="bg-white-600 text-black text-center">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">Shop Settings</h1>
      </header> */}
      <div className="mt-8 flex flex-col  md:flex-row">
        {/* Left Rectangle */}
        <ShopNav />
        {/* <ShopDashborad /> */}
        <ShopProducts user_id = {user_id} />

        
      </div>
    </div>
  );
};

export default ShopSettings;
