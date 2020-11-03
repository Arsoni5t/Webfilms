import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from './browse_footer'
import { FaSearch } from 'react-icons/fa'
import { BsFillPlayFill } from 'react-icons/bs'
import FilmItem from '../film/film_item'
import { RiArrowDownSFill } from 'react-icons/ri'

class Browse extends React.Component {
    constructor(props){
        super(props)
     
    }

 


   

    componentDidMount(){
        this.props.fetchFilms();
 
    }

    play(e) {
        e.currentTarget.muted = false; //plays audio
        e.currentTarget.play(); //plays video on hover
    }

    stop(e) {
        e.currentTarget.load();//refreshes video back to poster
    }

    reload() {
        this.componentDidMount();
    };

    render(){


        

     

        let { logout } = this.props
        let { films } = this.props; 
    
        let boolala = Object.values(this.props.films)[0] || {id:null}
    
$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".browsenav").addClass("scrolling");
    } else {
       $(".browsenav").removeClass("scrolling");
    }
});
    
        return (
      
        <div className="browsebg">

            <header className= 'browsenav' >
                    <nav className="browsenavleft">
                        <Link to="/">
                            <img className="browselogo" src={window.logoUrl} />
                        </Link>

                        <Link to="/browse" className="browsenavlinkshome">
                            <span>Home</span>
                        </Link>

                        <Link to="/browse"> 
                            <span className="browsenavlinks">Latest</span>
                        </Link>

                        <Link to="/browse"> 
                        <span className="browsenavlinks">My List</span>
                        </Link>

                        
                    </nav>

                    <nav className="browsenavright">
                         
                             <Link to="/browse"> 
                        <span className="searchicon"><FaSearch className="playicon"/></span> 
                        </Link>
                           <div>
                               <ul >
                                <li className="browselogout">Account
                               
                                        <ul className="logoutbg">
                                           
                                            <li className="logouttxt">
                                                <a href="https://www.linkedin.com/in/bradlarsoncode/" target="_blank">LinkedIn</a>
                                            </li>
                                             <li className="logouttxt">
                                                <a href="https://github.com/Arsoni5t/Webfilms" target="_blank">Github</a>
                                            </li>

                                            <li className="logouttxt">
                                                <a href="https://angel.co/u/brad-larson-4" target="_blank">AngelList</a>
                                            </li>
                                            <li className="logouttxt">
                                                <a href="http://www.bradlarson.me" target="_blank">Portfolio</a>
                                            </li>
                                            <hr class="solid" />
                                             <li className="logouttxt">
                                                <a onClick={logout}>Sign Out</a>
                                            </li>
                                        </ul>
                                   </li>
                               </ul>
                           </div>
                        <RiArrowDownSFill className="downarrow"/>
                      
                                     
                                            
                                     
                      
                    </nav>

            </header>
            <Link to={`/browse/${boolala.id}`}>
                <button className="playbutton"><BsFillPlayFill className="playicon"/>Play</button> 
                </Link>
            <div>
                 <img className="browsebanner" src={window.browsebanner2}/> 
                 
            </div>
            
            <div className="carousel">
               <h1 className="genretitle">Scary</h1>
                <div className="moviecontainer">
                    {films.map(film => {
                        if(film.genre === 'scary'){
                        return (
                           
                                <Link to = {`/browse/${film.id}`}> 
                                    <img className="movie" src = {film.poster} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                </div>
             
            </div>

            <div className="carousel">
               <h1 className="genretitle">Indie</h1>
                <div className="moviecontainer">
                    {films.map(film => {
                        if(film.genre === 'indie'){
                        return (
                           
                                <Link to = {`/browse/${film.id}`}> 
                                    <img className="movie" src = {film.poster} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                </div>
             
            </div>

                <div className="carousel">
               <h1 className="genretitle">Comedy</h1>
                <div className="moviecontainer">
                    {films.map(film => {
                        if(film.genre === 'comedy'){
                        return (
                           
                                <Link to = {`/browse/${film.id}`}> 
                                    <img className="movie" src = {film.poster} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                </div>
             
            </div>

                <div className="carousel">
               <h1 className="genretitle">Adventure</h1>
            
                <div className="moviecontainer">
                    {films.map(film => {
                        if(film.genre === 'adventure'){
                        return (
                           
                                <Link to = {`/browse/${film.id}`}> 
                                    <img className="movie" src = {film.poster} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                </div>
             
            </div>
               <footer background-color="black">
                 <div className="browsefooter">
                        <p className="browsefootertop">Contact Us</p>
                        <a href="https:www.linkedin.com/in/bradlarsoncode" target="_blank" className="browsefooteritems1"><img className="browseicons" src={window.linked} /></a>
                        <a href="https://github.com/Arsoni5t/Webfilms" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.github} /></a>
                        <a href="https://angel.co/u/brad-larson-4" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.angel} /></a>
                        <a href="http://www.bradlarson.me" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.portfolio} /></a>
                    </div>
             </footer>
   
                
                
        </div>


        )}
}

export default Browse


