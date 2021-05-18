import { connect } from 'react-redux';
import FilmItem from './film_item';
// import { addToQueue, deleteQueueFilm, fetchQueues} from '../../actions/queue_actions';
import { fetchFilm } from '../../actions/film_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let filmId = ownProps.match.params.filmId;
    let film = state.entities.films[filmId];
    return ({
        film: film,
        // inQueue: state.entities.queues.includes(ownProps.film)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchFilm: (id) => dispatch(fetchFilm(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        // addToQueue: (queue) => dispatch(addToQueue(queue)),
        // deleteQueueFilm: (filmId) => dispatch(deleteQueueFilm(filmId)),
        // fetchQueues: (userId) => dispatch(fetchQueues(userId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmItem));