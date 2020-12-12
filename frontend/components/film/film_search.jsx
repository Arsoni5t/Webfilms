import React from "react";
import { Link } from "react-router-dom";

const FilmSearch = props => (
  <div className="tile">
    <div id="search">
      <Link key={props.film.id} to={`/browse/${props.film.id}`}>
          <img id="searchmovie" src={props.film.poster}  /> 
      </Link>
    </div>
  </div>
);

export default FilmSearch;