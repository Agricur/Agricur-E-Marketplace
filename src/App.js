import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {LoginPage, HomePage, SellerRegisterPage, BuyerRegisterPage, OneItemPage, ShopsPage, ShopHomePage, BuyerAccountPage, AdminAccountPage, CartPage, CheckoutPage, ShopAccountPage, ShopSettingsPage} from './Routes.js';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/shops" element={<ShopsPage />}/>
      <Route path="/registerSeller" element={<SellerRegisterPage />}/>
      <Route path="/registerBuyer" element={<BuyerRegisterPage />}/>
      <Route path="/item" element={<OneItemPage />}/>
      <Route path="/shophome" element={<ShopHomePage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
      <Route path="/buyerAccount" element={<BuyerAccountPage />}/>
      <Route path="/shopsettings" element={<ShopSettingsPage />}/>
      <Route path="/adminAccount" element={<AdminAccountPage />}/>
      <Route path="/shopAccount" element={<ShopAccountPage />}/>

      </Routes>

      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;






