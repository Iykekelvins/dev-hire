import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/devsSlice';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section className="favorites">
      <h1>Favorites</h1>
      {
        favorites.length === 0 ? 
        <h2>No favorite developers yet...</h2>
        :
      <div className="cards">
        {
          favorites.map(favorite => (
            <Card dev={favorite} key={favorite._id} />
          ))
        }
      </div>
      }
    </section>
  )
}

export default Favorites