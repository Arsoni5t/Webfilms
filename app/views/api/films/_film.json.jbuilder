json.extract! film, :id, :title, :list, :genre, :year, :rating, :description
json.poster url_for(film.poster)
json.film url_for(film.film)