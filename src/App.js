import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './extra/scrollToTop/ScrollToTop';
import AdminPage from './pages/AdminPage';
import Cart from './pages/Cart';
import FAQ from './pages/FAQ';
import Home from './pages/HomePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Orders from './pages/Orers';
import ProductInfo from './pages/ProductInfo';
import Registration from './pages/Registration';
import './stylessheets/authentication.css';
import './stylessheets/layout.css';
import './stylessheets/login.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <ToastContainer />

        <Routes>
          
         
           {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
           <Route path='/' element={<Home/>} />
           <Route path='/orders' element={<Orders/>} />
           <Route path='/admin' element={<AdminPage/>} />
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