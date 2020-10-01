import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './browse_footer'
import { FaSearch } from 'react-icons/fa'
import { BsFillPlayFill } from 'react-icons/bs'
import FilmItem from '../film/film_item'

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
    

    
        return (
      
        <div className="browsebg">

            <header className="browsenav">
                    <nav className="browsenavleft">
                        <Link to="/">
                            <img className="browselogo" src={window.logoUrl} />
                        </Link>

                        <Link to="/browse" className="browsenavlinkshome">
                            <span>Home</span>
                        </Link>

                        {/* <Link to="/browse">  */}
                            <span className="browsenavlinks">Latest</span>
                        {/* </Link> */}

                        {/* <Link to="/browse">  */}
                        <span className="browsenavlinks">My List</span>
                        {/* </Link> */}

                        
                    </nav>

                    <nav className="browsenavright">
                        {/* <Link to="/browse">  */}
                        <span className="searchicon"><FaSearch className="playicon"/></span> 
                        {/* </Link> */}

                        <button className="browselogout" onClick={logout}>Sign out</button>
                     
                         
                    </nav>

            </header>
            <Link to={`/browse/${boolala.id}`}>
                <button className="playbutton"><BsFillPlayFill className="playicon"/>Play</button> 
                </Link>
            <div>
                 <img className="browsebanner" src={window.browsebanner2}/> 
                 
            </div>

            <div className="carousel">
                
                <div className="moviecontainer">
                    
                    {films.map(film => {
                        return (
                            <div>
                                <Link to = {`/browse/${film.id}`}> 
                                    <img src = {film.poster} className="movie" />
                                    {/* <p className="hide">{film.description}</p> */}
                                </Link>
                            </div>
                        )
                    })}
                </div>
             
            </div>
               <footer>
                 <div className="splashfooter">
                        <p className="splashfootertop">Hiring? Call 1-267-269-5454</p>
                        <p className="splashfooteritems">FAQ</p>
                        <p className="splashfooteritems">Help Center</p>
                        <p className="splashfooteritems">Terms of Use</p>
                        <p className="splashfooteritems">Privacy</p>
                       

                    </div>
             </footer>
                   
                
                
        </div>


        )}
}

export default Browse


