import "./slide.scss";
import React from 'react';
import Slider from 'infinite-react-carousel';
import CatCard from "../../catcard/CatCard";
import { cards } from "../../data";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
        <div className="container">


          <Slider  slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}  dots> 
            {
                
                children
            }
          </Slider>
            </div>
     </div>
  )
}

export default Slide