import { RECEIVE_QUEUES, RECEIVE_QUEUE_FILM, REMOVE_QUEUE_FILM } from "../actions/queue_actions";

const _nullState = [];

const queuesReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_QUEUES:
            nextState = action.queues.film_ids;
            return nextState;
        case RECEIVE_QUEUE_FILM:
            nextState.push(action.list.film_id);
            return nextState;
            // const idx = Object.keys(action.queue)[0];
            // nextState[idx] = action.queue[idx];
            // return nextState;
        case REMOVE_QUEUE_FILM:
            nextState.splice(nextState.indexOf(action.filmId), 1);
            return nextState;
            // delete nextState[Object.keys(action.queue)[0]];
            // return nextState;
        default:
            return state;
    }
};

export default queuesReducer;