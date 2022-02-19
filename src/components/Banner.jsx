import React, { useState } from 'react';
import Slider from 'react-slick';
import { carousel } from '../static/carouseldata';
import SingleCarousel from './SingleCarousel';

const Banner = () => {

    const [item , setItem] =useState(carousel);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow:false,
        PrevArrow:false,
        autoplay:true
        
      };


    return (
        <div className='slider container'>
            
            <Slider {...settings}>
                {
                    item.map((item) => { 
                        return <SingleCarousel item={item} key={item.id} />
                            
                    })
                }
             </Slider>
            
        </div>
    );
};

export default Banner;