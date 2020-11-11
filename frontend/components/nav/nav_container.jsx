import { connect } from 'react-redux';
import Nav from './nav'
import { logout } from '../../actions/session_actions';
import { fetchFilms, fetchFilm } from '../../actions/film_actions';
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = ({ session, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchFilms: () => dispatch(fetchFilms()),
    fetchFilm: film => dispatch(fetchFilm(film)),
    openModal: (modal, filmId) => dispatch(openModal(modal, filmId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

