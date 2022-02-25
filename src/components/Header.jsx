import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../src/image/logo.png';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 15,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
 
  
const Header = () => {
    const [click, setClick] =useState(false);
    //  const {user} =JSON.parse(localStorage.getItem('currentUser'))
    const {cartItems} =useSelector(state => state.cartReducer)
 
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="" />
          </Link>
          <div className="cart-item">
                <Link className="" to="/cart">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
                </StyledBadge>
                </IconButton>
                </Link>
              </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span onClick={() => setClick(!click)} className="navbar-toggler-ico">{click ? <AiOutlineClose size={25} color='black'/> : <FaBars size={25} color='black' />} </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">
                  {user && 
                  user.email.substring(0,user.email.length-10)
                  }
                </Link>
              </li> */}
             
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={'/' ? '#shopId' :'/'}>
                 Shop
                </a>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">
                  Register
                </Link>
              </li>

              
          


              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  Orders
                </Link>
              </li>
              
          
              <li className="nav-link cart-shop">
                <Link className="nav-item" to="/cart">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
                </StyledBadge>
                </IconButton>
                </Link>
              </li>

              
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
