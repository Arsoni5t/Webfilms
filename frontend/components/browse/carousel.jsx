import React from 'react';
import Genres from './genres'


export default function Carousel({films, openModal}) {

    const genres = ["indie", "scary", "comedy", "adventure"];
    
    return (
      <>
        {genres.map((category) => (
          <div id="carousel" key={category}> 
            <h1 className="genretitle">
              {category[0].toUpperCase()}
              {category.slice(1)}
            </h1>
            <Genres films={films} openModal={openModal} category={category} />
          </div>
        ))}
      </>
    ); 
}