import { connect } from 'react-redux';
import FilmItem from './film_item'

import { fetchFilm } from '../../actions/film_actions'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    let filmId = ownProps.match.params.filmId;
    let film = state.entities.films[filmId];
    return ({
        film: film
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchFilm: (id) => dispatch(fetchFilm(id)),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmItem))