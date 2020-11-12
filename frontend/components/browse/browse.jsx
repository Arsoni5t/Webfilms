import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from './browse_footer'

import { BsFillPlayFill } from 'react-icons/bs'
import FilmItem from '../film/film_item'
import FilmInfo from '../modal/modal'
import Nav from '../nav/nav'

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


  
$('#prev').on('click', function() {
  $('#scary').animate({
    scrollLeft: '-=750'
  }, 300);
});

$('#next').on('click', function() {
  $('#scary').animate({
    scrollLeft: '+=750'
  }, 300);
});

$('#prev2').on('click', function() {
  $('#indie').animate({
    scrollLeft: '-=750'
  }, 300);
});

$('#next2').on('click', function() {
  $('#indie').animate({
    scrollLeft: '+=750'
  }, 300);
});

$('#prev3').on('click', function() {
  $('#comedy').animate({
    scrollLeft: '-=750'
  }, 300);
});

$('#next3').on('click', function() {
  $('#comedy').animate({
    scrollLeft: '+=750'
  }, 300);
});

$('#prev4').on('click', function() {
  $('#adventure').animate({
    scrollLeft: '-=750'
  }, 300);
});

$('#next4').on('click', function() {
  $('#adventure').animate({
    scrollLeft: '+=750'
  }, 300);
});
     

        let { logout } = this.props
        let { films } = this.props; 
    
        let boolala = Object.values(this.props.films)[0] || {id:null}
    

$(window).click(function(e) {
  $(".modal").css({left: e.pageX});
  $(".modal").css({top: e.pageY});
  $(".modal").show();
});
    
        return (
      
        <div className="browsebg">
                <Nav 
                logout = {logout}
                />
               
        
          
     
            <Link to={`/browse/${boolala.id}`}>
                <button className="playbutton"><BsFillPlayFill className="playicon"/>Play</button> 
                </Link>
            <div>
                 <img className="browsebanner" src={window.browsebanner2}/> 
                 
            </div>
            
            <div className="carousel">
                
               <h1 className="genretitle">Scary</h1>
               
                <div id="scroller">
                   <button id="next">&gt;</button>
               <button id="prev">&#60;</button>
               </div>
                <div id="scary">
                    {films.map(film => {
                        if(film.genre === 'scary'){
                        return (
                           
                                <Link key={film.id} to = {`/`}> 
                                  {/* <Link key={film.id} to = {`/browse/${film.id}`}>  */}
                                    <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
                                    <p id="arrow">V</p>
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                         
                </div>
                
            </div>

            <div className="carousel2">
                
               <h1 className="genretitle">Indie</h1>
               
                <div id="scroller">
                   <button id="next2">&gt;</button>
                <button id="prev2">&#60;</button>
               </div>
                <div id="indie">
                    {films.map(film => {
                        if(film.genre === 'indie'){
                        return (
                           
                                <Link key={film.id} to = {`/`}> 
                                  {/* <Link key={film.id} to = {`/browse/${film.id}`}>  */}
                                    <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                         
                </div>
                
            </div>

                <div className="carousel3">
               <h1 className="genretitle">Comedy</h1>
               <div id="scroller">
                   <button id="next3">&gt;</button>
                <button id="prev3">&#60;</button>
               </div>
                <div id="comedy">
                    {films.map(film => {
                        if(film.genre === 'comedy'){
                        return (
                           
                                 <Link key={film.id} to = {`/`}> 
                                  {/* <Link key={film.id} to = {`/browse/${film.id}`}>  */}
                                    <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                     
                </div>
             
            </div>

                <div className="carousel4">
               <h1 className="genretitle">Adventure</h1>
                     <div id="scroller">
                   <button id="next4">&gt;</button>
                <button id="prev4">&#60;</button>
               </div>
                <div id="adventure">
                    {films.map(film => {
                        if(film.genre === 'adventure'){
                        return (
                           
                                <Link key={film.id} to = {`/`}> 
                                  {/* <Link key={film.id} to = {`/browse/${film.id}`}>  */}
                                    <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
                                    {/* <div className="hide">{film.description}</div> */}
                                </Link>
                        )
                    }})}
                      
                </div>
             <FilmInfo/>
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


        )
      }
}

export default Browse


