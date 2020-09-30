import { connect } from 'react-redux';
import Browse from './browse';
import { logout } from '../../actions/session_actions';
import { fetchFilms, fetchFilm } from '../../actions/film_actions'
import FilmItem from '../film/film_item'

const mapStateToProps = (state) => {
    // debugger
    return(
        {films: Object.values(state.entities.films)}
        )
    
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchFilms: () => dispatch(fetchFilms()),
    fetchFilm: film => dispatch(fetchFilm(film))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);