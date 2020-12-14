import React from "react";
import { Link } from "react-router-dom";
const FilmShow = props => { 
    // let title1 = props.props.title[0].toString()
    return(
    <div  className="modal">

        <Link to={`/browse/${props.props.id}`} onClick={props.closeModal}>
          <button className = "playbuttonmodal">Play</button>
        </Link>
        <img className="poster" src={props.props.poster} alt="" />
        <div className="detailscont">
            
             {/* <h2 color="white">{props.props.title} </h2> */}
            <div>   
                <div className="ratingdetails">
                    <span className='details'>{props.props.year}</span><br></br>
                    <span className='rating-modal'>{props.props.rating}</span><br></br>
                </div>
                    
                    <span className="description">{props.props.description}</span>
            </div>
            
            
        </div>
    </div>
)};

export default FilmShow;