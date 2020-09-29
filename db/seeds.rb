# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri' #not sure if I need this

User.destroy_all
Film.destroy_all

demo_user = User.create!({
    email: "demo@webfilms.com",
    password: "yomama"
})

f1 = Film.create!(title: "Boolala", year: 2019, rating: "PG", description: "Zak has an invisible friend named Boolala that tells him to do bad things. His mother is worried something may be wrong with him, while his father isn't worried too much at all. 
    Even if they can't agree about what to do about Zak, neither of them can get Boolala out of their minds, as the untoward intentions of both parents begins to spill out.")
f1_poster = open("https://webfilms-dev.s3.amazonaws.com/posters/Boolala_poster.jpg")
f1_film = open("https://webfilms-dev.s3.amazonaws.com/films/Boolala.mp4")
f1.poster.attach(io: f1_poster, filename: "f1_poster.jpg")
f1.film.attach(io: f1_film, filename: 'f1.mp4')