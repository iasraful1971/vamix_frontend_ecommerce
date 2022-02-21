import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './extra/scrollToTop/ScrollToTop';
import Cart from './pages/Cart';
import FAQ from './pages/FAQ';
import Home from './pages/HomePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductInfo from './pages/ProductInfo';
import Registration from './pages/Registration';
import './stylessheets/layout.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/> } />
          {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/faq' element={<FAQ/>}  />
          <Route path='/register' element={<Registration/>}/>
          <Route path='/product_info/:productId' element={<ProductInfo/>} />
          <Route path='*' element={<NotFound/>} />
         
        </Routes>
        <ScrollToTop/>
      </BrowserRouter>
    </div>
  );
};

export default App;