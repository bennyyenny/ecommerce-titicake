import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import ShopAll from './pages/ShopAll';
import Location from './pages/Location';
import ProductBuy from './pages/ProductBuy';
import { ShopContextProvider } from './context/ShopContext';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<ShopAll />} />
                <Route path=":id" element={<ProductBuy />} />
                <Route path="about" element={<About />} />
                <Route path="location" element={<Location />} />
            </Routes>
          </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
