import React from "react";
import { Link } from "react-router-dom";

const FilmSearch = props => (
  <div className="tile">


     <div id="search">
     
           
                    
                        
                                <Link key={props.film.id} to={`/browse/${props.film.id}`}>
                                  {/* <Link key={film.id} to = {`/browse/${film.id}`}>  */}
                                    <img id="searchmovie" src={props.film.poster}  /> 
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        
                  
                         
             
                
            </div>
    
    {/* <div className="tile__media">
      <img className="tile__img" src={props.film.poster} alt="" />
    </div>
      <Link key={props.film.id} to={`/browse/${props.film.id}`}>
        <div className="tile__details">
          <div className="tile__title">
            <h2>{props.film.title} </h2>
            {props.film.description}
          </div>
        </div>
      </Link> */}
  </div>
);

export default FilmSearch;