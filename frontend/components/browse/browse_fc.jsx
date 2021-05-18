import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import Nav from "../nav/nav";
import Footer from './browse_footer'
import Carousel from './carousel'



function Browse({fetchFilms, films, logout, openModal}){
    useEffect(()=>{
       fetchFilms();
    }, [])
  const boolala = Object.values(films)[0] || {id:null}

  return (
    <div className="browsebg">
      <Nav logout={logout} />
      <Link to={`/browse/${boolala.id}`}>
        <button className="playbutton">
          <BsFillPlayFill className="playicon" />
          Play
        </button>
      </Link>
      <span>
        <img className="browsebanner" src={window.browsebanner2} />
      </span>
      <Carousel films={films} openModal={openModal}/>
      <Footer />
    </div>
  );
}


export default Browse;