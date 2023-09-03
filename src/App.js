import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {LoginPage,HomePage,SellerRegisterPage,BuyerRegisterPage, OneItemPage} from './Routes.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/registerSeller" element={<SellerRegisterPage />}/>
      <Route path="/registerBuyer" element={<BuyerRegisterPage />}/>
      <Route path="/item" element={<OneItemPage />}/>
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
