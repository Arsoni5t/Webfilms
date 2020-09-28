import { RECEIVE_ALL_FILMS, RECEIVE_FILM } from '../actions/film_actions';
import merge from 'lodash/merge';

const filmsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_FILMS:
            return action.films;
        case RECEIVE_FILM:
            nextState[action.film.id] = action.film
            return nextState;
        default:
            return oldState;
    }
};

export default filmsReducer;