import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  LoginPage,
  HomePage,
  SellerRegisterPage,
  BuyerRegisterPage,
  OneItemPage,
  ShopsPage,
  ShopHomePage,
  BuyerAccountPage,
  AdminAccountPage,
} from "./Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/registerSeller" element={<SellerRegisterPage />} />
        <Route path="/registerBuyer" element={<BuyerRegisterPage />} />
        <Route path="/item" element={<OneItemPage />} />
        <Route path="/shophome" element={<ShopHomePage />} />
        <Route path="/buyerAccount" element={<BuyerAccountPage />} />
        <Route path="/adminAccount" element={<BuyerAccountPage />} />
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
        position="top-right"
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
