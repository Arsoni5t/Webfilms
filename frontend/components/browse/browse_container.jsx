import { connect } from 'react-redux';
import Browse from './browse';
import { logout } from '../../actions/session_actions';
import { fetchFilms, fetchFilm } from '../../actions/film_actions';
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = (state) => {

    return(
        {films: Object.values(state.entities.films)}
        )
    
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchFilms: () => dispatch(fetchFilms()),
    fetchFilm: film => dispatch(fetchFilm(film)),
    openModal: (modal, filmId) => dispatch(openModal(modal, filmId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);