import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {fetchFilms} from '../../actions/film_actions';
import {withRouter} from 'react-router-dom';
import {searchFilms} from '../../actions/film_actions'

const mapStateToProps = (state) => {
  let films = Object.values(state.entities.films);
  return {
    films: films
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: () => dispatch(fetchFilms()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))