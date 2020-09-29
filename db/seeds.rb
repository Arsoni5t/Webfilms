# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri' #not sure if I need this

User.destroy_all
Film.destroy_all

demo_user = User.create!({
    email: "demo@webfilms.com",
    password: "yomama"
})


###SCARY 

scary1 = Film.create!(title: "Boolala", year: 2019, rating: "PG", description: "Zak has an invisible friend named Boolala that tells him to do bad things.")
scary1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Boolala.png")
scary1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Boolala.mp4")
scary1.poster.attach(io: scary1_poster, filename: "scary1_poster.png")
scary1.film.attact(io: scary1_film, filename: "scary1.mp4")

scary2 = Film.create!(title: "The Girl With All The Gifst", year: 2016, rating: "R", description: "As fungus turns humanity into zombies, a band of survivors flees with a curiously evolved zombie girl who may hold the key to a cure.")
scary2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Gifts.png")
scary2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Gifts.mp4")
scary2.poster.attach(io: scary2_poster, filename: "scary2_poster.png")
scary2.film.attact(io: scary2_film, filename: "scary2.mp4")

scary3 = Film.create!(title: "Sleepy Hollow", year: 1999, rating: "R", description: "A sophisticated detective must keep his head together if he's going to learn the truth behind some grisly decapitations.")
scary3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Hollow.png")
scary3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Hollow.mp4")
scary3.poster.attach(io: scary3_poster, filename: "scary3_poster.png")
scary3.film.attact(io: scary3_film, filename: "scary3.mp4")

scary4 = Film.create!(title: "Hush", year: 2016, rating: "R", description: "A deaf writer living alone in the woods must fight for her life in silence when a masked killer appears in her window.")
scary4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Hush.png")
scary4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Hush.mp4")
scary4.poster.attach(io: scary4_poster, filename: "scary4_poster.png")
scary4.film.attact(io: scary4_film, filename: "scary4.mp4")

scary5 = Film.create!(title: "The Inviation", year: 2015, rating: "TV-MA", description: "A get-together with his ex and her new husband may be the polite thing to do, but maybe not the most prudent.")
scary5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Invitation.png")
scary5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Invitation.mp4")
scary5.poster.attach(io: scary5_poster, filename: "scary5_poster.png")
scary5.film.attact(io: scary5_film, filename: "scary5.mp4")

scary6 = Film.create!(title: "Killer Klowns From Outer Space", year: 1988, rating: "PG-13", description: "An alien band of killer clowns descends from the cosmos to harvest victims, cocooning their prey in cotton candy to eat later.")
scary6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Klowns.png")
scary6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Klowns.mp4")
scary6.poster.attach(io: scary6_poster, filename: "scary6_poster.png")
scary6.film.attact(io: scary6_film, filename: "scary6.mp4")

scary7 = Film.create!(title: "Silence Of The Lambs", year: 1991, rating: "R", description: "An FBI trainee ventures into an asylum to pick the brain of a psychiatrist turned cannibal.")
scary7_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Lambs.png")
scary7_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Lambs.mp4")
scary7.poster.attach(io: scary7_poster, filename: "scary7_poster.png")
scary7.film.attact(io: scary7_film, filename: "scary7.mp4")

scary8 = Film.create!(title: "Poltergeist", year: 1982, rating: "PG", description: "Their humble home is not quite as warm and comfortable as it used to be. Too much TV can be a killer.")
scary8_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Poltergeist.png")
scary8_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Poltergeist.mp4")
scary8.poster.attach(io: scary8_poster, filename: "scary8_poster.png")
scary8.film.attact(io: scary8_film, filename: "scary8.mp4")





###INDEPENDENT

indie1 = Film.create!(title: "There Will Be Blood", year: 2007, rating: "R", description: "And ambitious prospector strikes it rich and turns a simple village into a boomtown, stoking the ire of a charismatic young preacher.")
indie1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Blood.png")
indie1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Blood.mp4")
indie1.poster.attach(io: indie1_poster, filename: "indie1_poster.png")
indie1.film.attact(io: indie1_film, filename: "indie1.mp4")

indie2 = Film.create!(title: "The Endless", year: 2017, rating: "TV-MA", description: "Two adult brothers seek answers after an old video surfaces and brings them back to where they began... a UFO death cult.")
indie2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Endless.png")
indie2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Endless.mp4")
indie2.poster.attach(io: indie2_poster, filename: "indie2_poster.png")
indie2.film.attact(io: indie2_film, filename: "indie2.mp4")

indie3 = Film.create!(title: "Eternal Sunshine Of The Spotless Mind", year: 2004, rating: "R", description: "After learning his ex-girlfriend has all memories of him erased, a man decides to do the same with her.")
indie3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Eternal.png")
indie3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Eternal.mp4")
indie3.poster.attach(io: indie3_poster, filename: "indie3_poster.png")
indie3.film.attact(io: indie3_film, filename: "indie3.mp4")

indie4 = Film.create!(title: "Monty Python And The Holy Grail", year: 1975, rating: "PG", description: "King Arthur and his Knights quest wide and far for the Holy Grail.")
indie4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Grail.png")
indie4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Grail.mp4")
indie4.poster.attach(io: indie4_poster, filename: "indie4_poster.png")
indie4.film.attact(io: indie4_film, filename: "indie4.mp4")

indie5 = Film.create!(title: "Lady Bird", year: 2017, rating: "R", description: "A high schooler in Sacramento dreams of escaping to college on the East Coast.")
indie5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Lady.png")
indie5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Lady.mp4")
indie5.poster.attach(io: indie5_poster, filename: "indie5_poster.png")
indie5.film.attact(io: indie5_film, filename: "indie5.mp4")

indie6 = Film.create!(title: "Moonlight", year: 2016, rating: "R", description: "A young man who grows up poor, Black and gay in a rough Miami neighborhood tries to find his place in the world.")
indie6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Moonlight.png")
indie6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Moonlight.mp4")
indie6.poster.attach(io: indie6_poster, filename: "indie6_poster.png")
indie6.film.attact(io: indie6_film, filename: "indie6.mp4")



###COMEDY

comedy1 = Film.create!(title: "The Disaster Artist", year: 2017, rating: "R", description: "Aspiring actor Greg moves to LA with his strange friend Tommy, then agrees to star in his movie. Things start weird and get a lot weirder.")
comedy1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Disaster.png")
comedy1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Disaster.mp4")
comedy1.poster.attach(io: comedy1_poster, filename: "comedy1_poster.png")
comedy1.film.attact(io: comedy1_film, filename: "comedy1.mp4")

comedy2 = Film.create!(title: "The Money Pit", year: 1986, rating: "PG", description: "A young couple is beset by expensive repair costs and a crooked contractor when they buy a dream estate for a suspiciously low price.")
comedy2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Money.png")
comedy2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Money.mp4")
comedy2.poster.attach(io: comedy2_poster, filename: "comedy2_poster.png")
comedy2.film.attact(io: comedy2_film, filename: "comedy2.mp4")

comedy3 = Film.create!(title: "Scott Pilgrim Vs The World", year: 2010, rating: "PG-13", description: "Scott Pilgrim must vanquish all seven exes in martial arts battles of the dream girl that captures his heart.")
comedy3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Pilgrim.png")
comedy3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Pilgrim.mp4")
comedy3.poster.attach(io: comedy3_poster, filename: "comedy3_poster.png")
comedy3.film.attact(io: comedy3_film, filename: "comedy3.mp4")

comedy4 = Film.create!(title: "Safety Not Guaranteed", year: 2012, rating: "R", description: "A team of journalists are sent to find out who's behind a classified ad seeking a companion for time travel.")
comedy4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Safety.png")
comedy4.poster.attach(io: comedy4_poster, filename: "comedy4_poster.png")
comedy4.film.attact(io: comedy4_film, filename: "comedy4.mp4")

comedy5 = Film.create!(title: "Walk Hard", year: 2007, rating: "R", description: "Dewey Cox crosses paths with music icons in this parody of rags-to-riches music biopics.")
comedy5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Walk.png")
comedy5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Walk.mp4")
comedy5.poster.attach(io: comedy5_poster, filename: "comedy5_poster.png")
comedy5.film.attact(io: comedy5_film, filename: "comedy5.mp4")


###ADVENTURES

adventure1 = Film.create!(title: "Back To The Future", year: 1985, rating: "PG", description: "Marty McFly accidentally drives a time machine to 1955 and races the clock to ensure his future parents fall in love.")
adventure1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Future.png")
adventure1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Future.mp4")
adventure1.poster.attach(io: adventure1_poster, filename: "adventure1_poster.png")
adventure1.film.attact(io: adventure1_film, filename: "adventure1.mp4")

adventure2 = Film.create!(title: "Jurassic Park", year: 1993, rating: "PG-13", description: "A theme park with live dinosaurs turns disasterous when the dinosaurs escape.")
adventure2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Jurassic.png")
adventure2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Jurassic.mp4")
adventure2.poster.attach(io: adventure2_poster, filename: "adventure2_poster.png")
adventure2.film.attact(io: adventure2_film, filename: "adventure2.mp4")

adventure3 = Film.create!(title: "The Neverending Story", year: 1984, rating: "PG", description: "A boy holes up in his school's attic with a book about a land of dragons, racing snails and other magical creatures.")
adventure3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Neverending.png")
adventure3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Neverending.mp4")
adventure3.poster.attach(io: adventure3_poster, filename: "adventure3_poster.png")
adventure3.film.attact(io: adventure3_film, filename: "adventure3.mp4")

adventure4 = Film.create!(title: "Indiana Jones And The Raiders Of The Lost Ark", year: 1981, rating: "PG", description: "Indiana Jones battles nazis as he tries to locate the legendary Ark of the Covenant.")
adventure4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Raiders.png")
adventure4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Raiders.mp4")
adventure4.poster.attach(io: adventure4_poster, filename: "adventure4_poster.png")
adventure4.film.attact(io: adventure4_film, filename: "adventure4.mp4")

adventure5 = Film.create!(title: "Spider-Man Into The Spider-Verse", year: 2018, rating: "PG", description: "After being bitten by a radioactive spider, a Brooklyn teen gets a crash course in web-slinging from his alternate-dimension counterparts.")
adventure5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Spider.png")
adventure5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Spider.mp4")
adventure5.poster.attach(io: adventure5_poster, filename: "adventure5_poster.png")
adventure5.film.attact(io: adventure5_film, filename: "adventure5.mp4")