# json.set! @queue.film_id do
#     json.extract! @queue.film, :title, :year, :rating, :description
#     json.url url_for(@queue.film.film)
#     json.photo url_for(@queue.film.poster)
#     json.extract! @queue, :id, :user_id, :film_id
# end