import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io'


class FilmItem extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFilm(this.props.match.params.filmId)
    }

    render(){
        if (!this.props.film) return null;

        return (
            <div className="filmshowbg">
                <Link to="/browse">
                <IoMdArrowBack className="backbutton"/>
                </Link>
                <div>
                    {/* {this.props.film.title} */}
                    <video 
                        src={this.props.film.film}
                        poster={window.symbol}
                        width = "92%"
                        height="92%"
                        controls
                        className="playback"
                        // autoPlay
                    />
                </div>
                {/* {this.props.film.description} */}
            </div>
        )
    }
}

export default FilmItem