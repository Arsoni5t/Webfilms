import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './browse_footer'
import { FaSearch } from 'react-icons/fa'
import FilmItem from '../film/film_item'

class Browse extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFilms();
    }

    playVid(e) {
        e.currentTarget.muted = false; //plays audio
        e.currentTarget.play(); //plays video on hover
    }

    stopVid(e) {
        e.currentTarget.load();//refreshes video back to poster
    }

    reload() {
        this.componentDidMount();
    };

    render(){
        let { logout } = this.props
        let { films } = this.props; 
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
                        <span className="searchicon"><FaSearch /></span> 
                        {/* </Link> */}

                        <button className="browselogout" onClick={logout}>Sign out</button>
                     
                         
                    </nav>

            </header>

            <div>
                 <img className="browsebanner" src={window.browsebanner}/> 
                 {/* <button>PLAY</button>  */}
            </div>

            <div className="carousel">
                
                <div className="moviecontainer">
                    
                    {films.map(film => {
                        return (
                            <div>
                                <video 
                                    className="movie" 
                                    // src={film.film} 
                                    poster={film.poster} 
                                    // onMouseOver={this.playVid}
                                    // onMouseOut={this.reload}
                                    muted="muted" 
                                    alt=""/>
                            </div>
                        )
                    })}
                </div>
               
            </div>
             
                   
                {/* <Footer /> */}
                
        </div>


        )}
}

export default Browse


