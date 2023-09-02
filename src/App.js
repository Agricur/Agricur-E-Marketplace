import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {LoginPage,HomePage,SellerRegisterPage} from './Routes.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<SellerRegisterPage />}/>
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
