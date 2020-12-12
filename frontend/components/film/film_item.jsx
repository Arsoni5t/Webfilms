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
        
        let justHidden = false;
        
        let hide = function hide() {
            $('.backbutton').addClass('hidden');
        }

        $(document).ready(function() {
            let j;
            $(document).mousemove(function() {
                if (!justHidden) {
                    justHidden = false;
                    clearTimeout(j);
                    $('.backbutton').removeClass('hidden');
                    j = setTimeout(hide, 500);
                }
            });
        });

        return (
            <div className="filmshowbg">
                <Link to="/browse">
                <IoMdArrowBack className="backbutton hidden"/>
                </Link>
                <div className="playback" >
                    <video 
                        src={this.props.film.film}
                        poster={this.props.film.poster}
                        width = "100%"
                        height = "100%"
                        controls
                        autoPlay
                    />
                </div>
            </div>
        )
    }
}

export default FilmItem