json.extract! film, :id, :title, :year, :rating, :description
json.photo url_for(film.photo)
json.video url_for(film.video)