import * as FilmAPIUtil from '../util/films_api_util';

export const RECEIVE_ALL_FILMS = 'RECEIVE_ALL_FILMS';
export const RECEIVE_FILM = 'RECEIVE_FILM';


export const receiveFilms = (films) => ({
    type: RECEIVE_ALL_FILMS,
    films
});


export const receiveFilm = (film) => ({
    type: RECEIVE_FILM,
    film
});


export const fetchFilms = () => dispatch => (
    FilmAPIUtil.fetchFilms()
        .then(films => dispatch(receiveFilms(films)))
);

export const fetchFilm = id => dispatch => (
    FilmAPIUtil.fetchFilm(id)
        .then(film => dispatch(receiveFilm(film)))
);

// export const searchFilms = (query, id) => dispatch (
//    FilmAPIUtil.searchFilms(query, id)
//    .then((films) => dispatch(receiveFilms(films)))
//    );
