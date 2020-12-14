import React from 'react';
import Nav from '../nav/nav'
import FilmSearch from '../film/film_search'

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  fetchQuery() {
    console.log(this.props.history.location.search.split("=")[1])
    return this.props.history.location.search.split("=")[1];
  }

  findFilms() {
    const films = this.props.films.map((film) => {
      let lowerCaseTitle = (film.title.split(" ").join("%20")).toLowerCase();
      console.log(lowerCaseTitle)
      let lowerCaseGenre= (film.genre).toLowerCase();
  
      if (lowerCaseTitle.includes(this.fetchQuery().toLowerCase()) || lowerCaseGenre.includes(this.fetchQuery().toLowerCase())) 
      {
         return (
         <FilmSearch 
            key = {film.title}
            film = {film}
         /> )
      }
    })
    return films;
  }

  render() {
    let { logout } = this.props
    if (this.props.films.length === 0) return null;

    return (
      <div className="searchbg">
          <Nav 
                logout = {logout}
                />
        <div className='movie-search-results'>
           
        {this.findFilms()}
        </div>
        <footer background-color="black">
                 <div className="searchfooter">
                        <p className="searchfootertop">Contact Us</p>
                        <a href="https:www.linkedin.com/in/bradlarsoncode" target="_blank" className="browsefooteritems1"><img className="browseicons" src={window.linked} /></a>
                        <a href="https://github.com/bradlarsoncode/Webfilms" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.github} /></a>
                        <a href="https://angel.co/u/brad-larson-4" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.angel} /></a>
                        <a href="http://www.bradlarson.me" target="_blank" className="browsefooteritems"><img className="browseicons" src={window.portfolio} /></a>
                      
                    </div>
             </footer>
      </div>
    );
  }
}

export default Search;
