json.extract! film, :id, :title, :genre, :year, :rating, :description
json.poster url_for(film.poster)
json.film url_for(film.film)