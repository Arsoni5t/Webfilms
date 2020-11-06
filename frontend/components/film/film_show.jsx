import React from "react";
import { Link } from "react-router-dom";
const FilmShow = props => { 

    return(
    <div>

        <div>
            <img src={props.props.poster} alt="" />
        </div>
        <Link to={`/browse/${props.props.id}`} onClick={props.closeModal}>
          <h2>HELLLLLLLLLOOOOOOO</h2>
                <div>
                    <h2>{props.props.title} </h2>
                    {props.props.description}
                </div>
           
        </Link>
    </div>
)};

export default FilmShow;