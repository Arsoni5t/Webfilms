import React from "react";
import { Link } from "react-router-dom";
const FilmShow = props => { 

    return(
    <div  className="modal">

        <Link to={`/browse/${props.props.id}`} onClick={props.closeModal}>
          <button className = "playbuttonmodal">Play</button>
        </Link>
        <img src={props.props.poster} alt="" />
        <div>
            
             {/* <h2 color="white">{props.props.title} </h2> */}
             <span>{props.props.year}</span><br></br>
             <span>{props.props.rating}</span><br></br>
            {props.props.description}
        </div>
    </div>
)};

export default FilmShow;