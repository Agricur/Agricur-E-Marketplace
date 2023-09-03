import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {LoginPage,HomePage, ShopsPage} from './Routes.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/shops" element={<ShopsPage />}/>
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
