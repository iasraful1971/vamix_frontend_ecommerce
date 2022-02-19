import React from 'react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footer from '../../src/image/logo.png';
import play1 from '../image/payment.png';
const Footer = () => {
    return (
        <div className='footer pb-2'>
          <div className="container">
          <div className="row d-flex-footer">
                <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                    <img src={footer} alt="" className="img-fluid" />
                    <p className="footer-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="footer-icon">
                        <FaFacebookF className='icon'/>
                        <FaPinterestP  className='icon'/>
                        <AiOutlineTwitter  className='icon'/>
                        <AiFillLinkedin  className='icon'/>
                    </div>
                    <Link to="https//www.asraful-dev.netlify.app">
                    Check our shop in Google Map
                    </Link>
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12 col-12">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <h4>Help</h4>
                            <ul>
                                <li>
                                    <a href="">Track Your Order</a>
                                </li>
                                <li>
                                    <a href="">product Guides</a>
                                </li>
                                <li>
                                    <a href="">Wishlists</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Store Locator</a>
                                </li>
                            </ul>
                        </div>
                 
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <h4>Community</h4>
                            <ul>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                                <li>
                                    <a href="">Location us</a>
                                </li>
                                <li>
                                    <a href="">career</a>
                                </li>
                                <li>
                                    <a href="">Gift cards</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <h4>Socials</h4>
                            <ul>
                                <li>
                                    <a href="">Facebook</a>
                                </li>
                                <li>
                                    <a href="">Twitter</a>
                                </li>
                                <li>
                                    <a href="">Linkedin</a>
                                </li>
                                <li>
                                    <a href="">Pinterist</a>
                                </li>
                                <li>
                                    <a rel="noopener" href="#">Phone: <br />
                             (+123) 456-7898</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12"></div>
                        
                    </div>
                </div>
            </div>
            <hr />

            <div className="row space-between-footer my-3">
                <div className="col-md-6">
                    <h6>Copyright @2021 Vaxim. All Rights Reserved By <a target="_blank" rel="noopener noreferrer" href="https://asraful-dev.netlify.app/" >Muhammad Asraful </a></h6>
                </div>
                <div className="col-md-6">
                    <div className="footer-img ms-auto">
                        <img className='img-fluid' src={play1} alt="" />
                       
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Footer;





