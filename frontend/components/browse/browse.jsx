import React from 'react'
import { Link } from 'react-router-dom';
import Genre from './genre'
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

  $('#prev').on('click', () => {
      $('#category').animate({
        scrollLeft: '-=750'
      }, 300);
    });

  $('#next').on('click', () => {
      $('#category').animate({
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

  const genres = ["indie", "scary", "comedy", "adventure"];
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
           
              {genres.map(category => 
                
                  <div id="carousel" key={category}> {/*CAROUSEL CONTAINER */}
                      
                    <div id="scroller"> {/*HIDES ARROWS*/}
                          <button id="next" >&gt;</button>
                          <button id="prev" >&#60;</button>
                    </div>    
                    
                      <h1 className="genretitle">{category[0].toUpperCase()}{category.slice(1)}</h1> {/*EACH CATEGORY TITLE*/}
                        <div id="category"> {/*EACH CATEGORY*/}
                          {films.map(film => { {/*MAP THROUGH ALL FILMS*/}
                              if(film.genre === category){ {/*IF FILM'S GENRE MATCHES CURRENT GENRE FROM GENRE ARRAY*/}
                                return (
                                  <Link key={film.id} to = {`/`}> 
                                      <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
                                  </Link>
                              )
                          }})}
                      </div> 
                  </div>
              )}
              
             <FilmInfo/>
               <footer background-color="black">
                 <div className="browsefooter">
                        <p className="browsefootertop">Contact Us</p>
                        <a href="https://linkedin.com/in/bradlarsoncode" target="_blank" className="browsefooteritems1"><img className="browseicons" src={window.linked} /></a>
                        <a href="https://github.com/bradlarsoncode/Webfilms" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.github} /></a>
                        <a href="https://angel.co/u/brad-larson-4" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.angel} /></a>
                        <a href="http://www.bradlarson.me" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.portfolio} /></a>
                  </div>
             </footer>
        </div>
        )
    }
}

export default Browse
