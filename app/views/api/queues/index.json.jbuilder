# @queues.each do |queue|
#     json.set! queue.film.id do
#         json.extract! queue.film, :title, :year, :rating, :description
#         json.filmURL url_for(queue.film.url) if queue.film.url.attached?
#         json.posterURL url_for(queue.film.poster) if queue.film.poster.attached?
#         json.extract! queue, :id, :user_id, :film_id
#     end
# end

arr = [];

@queues.each do |queue|
    arr.push(queue.film_id);
end

json.film_ids arr