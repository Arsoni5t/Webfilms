export const fetchFilms = () => (
    $.ajax({
        url: '/api/films',
        method: 'GET'
    })
);

export const fetchFilm = id => (
    $.ajax({
        url: `/api/films/${id}`,
        method: 'GET'
    })
);