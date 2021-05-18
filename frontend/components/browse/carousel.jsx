import React from 'react';
import Genres from './genres'


export default function Carousel({films, openModal}) {

    const genres = ["indie", "scary", "comedy", "adventure"];
    
    return (
      <>
        {genres.map((genre) => (
          <div id="carousel" key={genre}> 
            <h1 className="genretitle">
              {genre[0].toUpperCase()}
              {genre.slice(1)}
            </h1>
            <Genres films={films} openModal={openModal} genre={genre} />
          </div>
        ))}
      </>
    ); 
}