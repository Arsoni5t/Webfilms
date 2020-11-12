import React from 'react';
import Nav from '../nav/nav'
// import MovieItem from "../movie_genre_list/movie_item";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  getQueryString() {
    return this.props.history.location.search.split("=")[1];
  }

  getFilms() {
    const films = this.props.films.map((film) => {
      let lowerCaseTitle= (film.title).toLowerCase();
    //   let lowerCaseGenre= (film.genre).toLowerCase();
      if (lowerCaseTitle.includes(this.getQueryString().toLowerCase()) 
      
        // || lowerCaseGenre.includes(this.getQueryString().toLowerCase())
        ) {
        return (<ul>
            <li>
                { film.title}
            </li>
        </ul>
            
        // <filmItem
        //   key={film.title}
        //   film={film}
        // />
        )
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
            <div className="row__inner_search ">

            </div>
        {this.getFilms()}
        </div>
      </div>
    );
  }
}

export default Search;