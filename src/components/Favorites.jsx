import React from 'react';
import Card from './Card';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectNumber, addNumber } from '../redux/devsSlice';

const Favorites = () => {
  // const dispatch = useDispatch();
  // const number = useSelector();

  return (
    <section className="favorites">
      <h1>Favorites</h1>
      <div className="cards">
        <Card/>
      </div>
    </section>
  )
}

export default Favorites