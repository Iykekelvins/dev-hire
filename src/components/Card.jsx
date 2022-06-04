import React from 'react';
import header from "../assets/image.png";
import user from "../assets/user.png";
import {ReactComponent as HeartIcon} from "../svgs/heart-white.svg";

const Card = () => {
  return (
    <article className='card'>
        <img src={header} alt="header" className="header" />
        <img src={user} alt="user" className="user" />
        <div className="svg-container">
        <HeartIcon/>
        </div>
        <div className="card--footer">
        <div>
            <h2>Wale Davies</h2>
            <h3>₦30,000</h3>
        </div>
        <button>Hire</button>
        </div>
  </article>
  )
}

export default Card