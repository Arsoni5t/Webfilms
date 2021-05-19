import React, {useMemo} from 'react';
import { Link } from "react-router-dom";
import FilmInfo from "../modal/modal";

function Genres({films, openModal, genre}){
    const matches = useMemo(() => {
      return films.filter((film) => film.genre.includes(genre))},
      [films, genre]
      ) 
      
    const clickNext = () => {
      $("#" + genre).animate(
        {scrollLeft: "+=750",},300);
      }

    const clickPrev = () => {
      $("#" + genre).animate(
        {scrollLeft: "-=750",},300);
      };
    
  return (
    <>
      <div id="scroller">
        <button id="next" onClick={clickNext}>&gt;</button>
        <button id="prev" onClick={clickPrev}>&#60;</button>
      </div>
      <div key={genre} id={genre}>
          {matches && matches.map((film) => {
            return (
              <Link key={film.id} to={`/`}>
                <video
                  id="movie"
                  src={film.film}
                  poster={film.poster}
                  onClick={() => openModal("show", film.id)}
                  muted
                  onMouseOver={(e)=>e.target.play()}
                  onMouseOut={(e)=>e.target.load()}
                />
              </Link>
            );
          })
          }
      </div>
      <FilmInfo />
    </>
  );
}

export default Genres