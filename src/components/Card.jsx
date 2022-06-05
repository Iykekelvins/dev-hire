import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFav, selectFavorites } from '../redux/devsSlice';
import { selectConvertInfo } from '../redux/currencySlice';
import {ReactComponent as HeartIcon} from "../assets/svgs/heart-white.svg";

const Card = ({dev}) => {
  const {_id} = dev;
  const {service_photo, avatar, display_name, starting_from} = dev._source;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const convertInfo = useSelector(selectConvertInfo);

  
  return (
    <article className='card'>
        <img src={service_photo} alt="header" className="header" />
        <img src={avatar} alt="user" className="user" />
        <button className={ favorites.find(favorite => favorite._id === _id) ? "svg-container active" : "svg-container"}
        onClick={()=> dispatch(addToFav(dev))}
        >
        <HeartIcon/>
        </button
        
        >
        <div className="card--footer">
        <div>
            <h2>{display_name}</h2>
            <h3>{`${convertInfo.symbol}${parseFloat(parseInt(starting_from/convertInfo.divider))}`}</h3>
        </div>
        <button>Hire</button>
        </div>
  </article>
  )
}

export default Card