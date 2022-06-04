import React from 'react';
import Card from './Card';

const Favorites = () => {
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