 @films.each do |movie|
  json.set! movie.id do 
    json.partial! 'api/films/film', film: movie
  end
end