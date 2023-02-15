
import React from "react";
import { Link } from "react-router-dom";
import "./gigcard.scss";

const GigCard = ({item}) => {
  return (
    <Link to={`/gig/${item?.id}`} className="gigCard">
      <img src={"https://images.pexels.com/photos/14688950/pexels-photo-14688950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
        <div className="info">
            <div className="user">
                  <img src={ "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=400"} alt="..."  />
                <span>{item?.username}</span>
            </div>
            <p className="desc">{item?.desc}</p>
            <div className="star">
                  <i className="fa-regular fa-star"></i>
                <span>{item?.star}</span>
            </div>
        </div>
        <hr />
        <div className="details">
              <span className="heart"> ❤</span>
            <span className="span">Starting At</span>
            <h2>{item?.price}</h2>
        </div>
    </Link>
  )
}

export default GigCard