import "./App.css";
import { BrowserRouter, HashRouter as Routes,  Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {LoginPage, 
        AdminLoginPage, 
        HomePage, 
        SellerRegisterPage, 
        BuyerRegisterPage, 
        OneItemPage, 
        ShopsPage, 
        ShopHomePage, 
        BuyerAccountPage, 
        AdminAccountPage, 
        CartPage, 
        CheckoutPage, 
        ShopSettingsPage, 
        Fertilizers,
        Fruits,
        Vegetables,
        Grains,
        Equipments,
        ErrorPage,
        Help,
        Contacts,
        Tips,
        CourierPage,
        Notifications
      } from './Routes.js';

function App() {
  return (
    // <BrowserRouter>

    <Routes >
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/adminLogin" element={<AdminLoginPage />}/>
      <Route path="/shops" element={<ShopsPage />}/>
      <Route path="/registerSeller" element={<SellerRegisterPage />}/>
      <Route path="/registerBuyer" element={<BuyerRegisterPage />}/>
      <Route path="/item/:ProductId" element={<OneItemPage />}/>
      <Route path="/shophome/:ShopId" element={<ShopHomePage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/checkout/:productId/:quantitiy/:price" element={<CheckoutPage />}/>
      <Route path="/checkout/:productId" element={<CheckoutPage />}/>
      <Route path="/userAccount" element={<BuyerAccountPage />}/>
      <Route path="/adminAccount" element={<AdminAccountPage />}/>
      <Route path="/shopAccount" element={<ShopSettingsPage />}/>
      <Route path="/fertilizers" element={<Fertilizers />}/>
      <Route path="/fruits" element={<Fruits />}/>
      <Route path="/grains" element={<Grains />}/>
      <Route path="/vegetables" element={<Vegetables />}/>
      <Route path="/equipments" element={<Equipments />}/>
      <Route path="/errorPage" element={<ErrorPage />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/tips" element={<Tips />}/>
      <Route path="/courier" element={<CourierPage />}/>
      <Route path="/notifications" element={<Notifications />}/>
      

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
      </Routes>
    // </BrowserRouter>
  );
}

export default App;






