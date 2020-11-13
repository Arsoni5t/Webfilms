import {connect} from 'react-redux';
import SearchResults from './search_results';
import {fetchFilms} from '../../actions/film_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let films = Object.values(state.entities.films);
  return {
    films: films
  };
};


const mapDispatchToProps = dispatch => {
  return {
   fetchFilms: () => dispatch(fetchFilms()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
