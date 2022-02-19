import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
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

          <Route path='/home' element={<Home/> } />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registration/>}/>
          <Route path='/product_info' element={<ProductInfo/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;