import * as QueueApiUtil from "../util/queue_api_util";

export const RECEIVE_QUEUE_FILM = "RECEIVE_QUEUE_FILM";
export const RECEIVE_QUEUES = "RECEIVE_QUEUES";
export const REMOVE_QUEUE_FILM = "REMOVE_QUEUE_FILM";

const receiveQueueFilm = (queue) => ({
    type: RECEIVE_QUEUE_FILM,
    queue,
});

const receiveQueues = (queues) => {
    return{
    type: RECEIVE_QUEUES,
    queues
};};

const removeQueueFilm = (filmId) => ({
    type: REMOVE_QUEUE_FILM,
    filmId
});

export const fetchQueues = () => (dispatch) => {
    return QueueUtils.fetchQueues().then((queues) => {
        return dispatch(receiveQueues(queues));
    });
};

export const addToQueue = (queueFilm) => (dispatch) => {
    return QueueUtils.addToQueue(queueFilm).then(
        (queue) => dispatch(receiveQueueFilm(queue))
    );
};

export const deleteQueueFilm = (queue) => (dispatch) => {
    return QueueUtils.deleteQueueFilm(queue).then(() => {
        dispatch(removeQueueFilm(queue.film_id));
    });
};