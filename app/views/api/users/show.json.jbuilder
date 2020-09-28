json.partial! "api/users/user", user: @user
json.video url_for(film.video)
json.photo url_for(film.photo)