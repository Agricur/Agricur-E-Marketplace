import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {LoginPage,HomePage,SellerRegisterPage,BuyerRegisterPage,OneItemPage,BuyerAccountPage,AdminAccountPage,} from './Routes.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/registerSeller" element={<SellerRegisterPage />}/>
      <Route path="/registerBuyer" element={<BuyerRegisterPage />}/>
      <Route path="/item" element={<OneItemPage />}/>
      <Route path="/buyerAccount" element={<BuyerAccountPage />}/>
      <Route path="/adminAccount" element={<BuyerAccountPage />}/>
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
