import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
const SingleCarousel = ({item}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        AOS.refreshHard()
      }, []);
    return (
        <div className='row single-carousel'>
            <div className="col-md-1"></div>
           <div className="col-md-5 ">
               <h2>{item.title}</h2>
               <p>{item.details}</p>
               <div className="middle-button">
               <button className="shop-now">show now</button>
               </div>
           </div>
           <div className="col-md-6 middle-image">
           <img  data-aos="fade-down" src={item.img} alt="img" className='img-fluid' />
           </div>
        </div>
    );
};

export default SingleCarousel;