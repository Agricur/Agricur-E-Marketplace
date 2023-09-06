import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {LoginPage, HomePage, SellerRegisterPage, BuyerRegisterPage, OneItemPage, ShopsPage, ShopHomePage, CartPage, CheckoutPage} from './Routes.js';
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
      <Route path="/cartpage" element={<CartPage />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
