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

# scary1 = Film.create!(genre: 'scary', title: "Boolala", year: 2019, rating: "PG", description: "Zak has an invisible friend named Boolala that tells him to do bad things.")
# scary1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Boolala.png")
# scary1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Boolala.mp4")
# scary1.poster.attach(io: scary1_poster, filename: "scary1_poster.png")
# scary1.film.attach(io: scary1_film, filename: "scary1.mp4")

# scary2 = Film.create!(genre: 'scary', title: "The Girl With All The Gifts", year: 2016, rating: "R", description: "As fungus turns humanity into zombies, a band of survivors flees with a curiously evolved zombie girl who may hold the key to a cure.")
# scary2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Gifts.png")
# scary2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Gifts.mp4")
# scary2.poster.attach(io: scary2_poster, filename: "scary2_poster.png")
# scary2.film.attach(io: scary2_film, filename: "scary2.mp4")

# scary3 = Film.create!(genre: 'scary', title: "Sleepy Hollow", year: 1999, rating: "R", description: "A sophisticated detective must keep his head together if he's going to learn the truth behind some grisly decapitations.")
# scary3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Hollow.png")
# scary3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Hollow.mp4")
# scary3.poster.attach(io: scary3_poster, filename: "scary3_poster.png")
# scary3.film.attach(io: scary3_film, filename: "scary3.mp4")

# scary4 = Film.create!(genre: 'scary', title: "Hush", year: 2016, rating: "R", description: "A deaf writer living alone in the woods must fight for her life in silence when a masked killer appears in her window.")
# scary4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Hush.png")
# scary4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Hush.mp4")
# scary4.poster.attach(io: scary4_poster, filename: "scary4_poster.png")
# scary4.film.attach(io: scary4_film, filename: "scary4.mp4")

# scary5 = Film.create!(genre: 'scary', title: "The Inviation", year: 2015, rating: "TV-MA", description: "A get-together with his ex and her new husband may be the polite thing to do, but maybe not the most prudent.")
# scary5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Invitation.png")
# scary5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Invitation.mp4")
# scary5.poster.attach(io: scary5_poster, filename: "scary5_poster.png")
# scary5.film.attach(io: scary5_film, filename: "scary5.mp4")

scary6 = Film.create!(genre: 'scary', title: "Scary Stories To Tell In The Dark",  year: 2019, rating: "PG-13", description: "On the run from bullies, a group of trick-or-treating teenagers hide in a local haunted house and discover a trove of chilling tales unfolding within.")
scary6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Scary.png")
scary6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Scary.mp4")
scary6.poster.attach(io: scary6_poster, filename: "scary6_poster.png")
scary6.film.attach(io: scary6_film, filename: "scary6.mp4")

scary7 = Film.create!(genre: 'scary', title: "Silence Of The Lambs", year: 1991, rating: "R", description: "An FBI trainee ventures into an asylum to pick the brain of a psychiatrist turned cannibal.")
scary7_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Lambs.png")
scary7_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Lambs.mp4")
scary7.poster.attach(io: scary7_poster, filename: "scary7_poster.png")
scary7.film.attach(io: scary7_film, filename: "scary7.mp4")

scary8 = Film.create!(genre: 'scary', title: "Poltergeist", year: 1982, rating: "PG", description: "Their humble home is not quite as warm and comfortable as it used to be. Too much TV can be a killer.")
scary8_poster = open("https://webfilms-films.s3.amazonaws.com/posters/scary/Poltergeist.png")
scary8_film = open("https://webfilms-films.s3.amazonaws.com/videos/Scary/Poltergeist.mp4")
scary8.poster.attach(io: scary8_poster, filename: "scary8_poster.png")
scary8.film.attach(io: scary8_film, filename: "scary8.mp4")





# ###INDEPENDENT

# indie1 = Film.create!(genre: 'indie', title: "There Will Be Blood", year: 2007, rating: "R", description: "And ambitious prospector strikes it rich and turns a simple village into a boomtown, stoking the ire of a charismatic young preacher.")
# indie1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Blood.png")
# indie1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Blood.mp4")
# indie1.poster.attach(io: indie1_poster, filename: "indie1_poster.png")
# indie1.film.attach(io: indie1_film, filename: "indie1.mp4")

# indie2 = Film.create!(genre: 'indie', title: "The Endless", year: 2017, rating: "TV-MA", description: "Two adult brothers seek answers after an old video surfaces and brings them back to where they began... a UFO death cult.")
# indie2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Endless.png")
# indie2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Endless.mp4")
# indie2.poster.attach(io: indie2_poster, filename: "indie2_poster.png")
# indie2.film.attach(io: indie2_film, filename: "indie2.mp4")

indie3 = Film.create!(genre: 'indie', title: "Eternal Sunshine Of The Spotless Mind", year: 2004, rating: "R", description: "After learning his ex-girlfriend has all memories of him erased, a man decides to do the same with her.")
indie3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Eternal.png")
indie3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Eternal.mp4")
indie3.poster.attach(io: indie3_poster, filename: "indie3_poster.png")
indie3.film.attach(io: indie3_film, filename: "indie3.mp4")

indie4 = Film.create!(genre: 'indie', title: "Eighth Grade", year: 2018, rating: "R", description: "Despite her social isolation and fears about high school, a shy eighth grader musters up optimism to make it through the last week of middle school.")
indie4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Eighth.png")
indie4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Eighth.mp4")
indie4.poster.attach(io: indie4_poster, filename: "indie4_poster.png")
indie4.film.attach(io: indie4_film, filename: "indie4.mp4")

indie5 = Film.create!(genre: 'indie', title: "Lady Bird", year: 2017, rating: "R", description: "A high schooler in Sacramento dreams of escaping to college on the East Coast.")
indie5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Lady.png")
indie5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Lady.mp4")
indie5.poster.attach(io: indie5_poster, filename: "indie5_poster.png")
indie5.film.attach(io: indie5_film, filename: "indie5.mp4")

# indie6 = Film.create!(genre: 'indie', title: "Moonlight", year: 2016, rating: "R", description: "A young man who grows up poor, Black and gay in a rough Miami neighborhood tries to find his place in the world.")
# indie6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Moonlight.png")
# indie6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Moonlight.mp4")
# indie6.poster.attach(io: indie6_poster, filename: "indie6_poster.png")
# indie6.film.attach(io: indie6_film, filename: "indie6.mp4")

# indie7 = Film.create!(genre: 'indie', title: "Birdman or (Thre Unexpected Virtue of Ignorance)", year: 2014, rating: "R", description: "A forgotten actor known for his superhero character struggles to make a comeback on the Broadway stage while his personal life and psyche implode.")
# indie7_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Birdman.png")
# indie7_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Birdman.mp4")
# indie7.poster.attach(io: indie7_poster, filename: "indie7_poster.png")
# indie7.film.attach(io: indie7_film, filename: "indie7.mp4")

# indie8 = Film.create!(genre: 'indie', title: "Silver Linings Playbook", year: 2012, rating: "R", description: "After a stint in a mental hospital, Pat moves in with his parents and tries to win back his wife, until he meets a woman who's as unstable as he is.")
# indie8_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Silver.png")
# indie8_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Silver.mp4")
# indie8.poster.attach(io: indie8_poster, filename: "indie8_poster.png")
# indie8.film.attach(io: indie8_film, filename: "indie8.mp4")

# indie9 = Film.create!(genre: 'indie', title: "Nightcrawler", year: 2014, rating: "R", description: "A young hustler finds success trolling the streets of Los Angeles to film disasters and death. But the darkness he captures starts to take hold of him.")
# indie9_poster = open("https://webfilms-films.s3.amazonaws.com/posters/independent/Nightcrawler.png")
# indie9_film = open("https://webfilms-films.s3.amazonaws.com/videos/Independent/Nightcrawler.mp4")
# indie9.poster.attach(io: indie9_poster, filename: "indie9_poster.png")
# indie9.film.attach(io: indie9_film, filename: "indie9.mp4")

# ###COMEDY

# comedy1 = Film.create!(genre: 'comedy', title: "The Disaster Artist", year: 2017, rating: "R", description: "Aspiring actor Greg moves to LA with his strange friend Tommy, then agrees to star in his movie. Things start weird and get a lot weirder.")
# comedy1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Disaster.png")
# comedy1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Disaster.mp4")
# comedy1.poster.attach(io: comedy1_poster, filename: "comedy1_poster.png")
# comedy1.film.attach(io: comedy1_film, filename: "comedy1.mp4")

# comedy2 = Film.create!(genre: 'comedy', title: "The Great Dictator", year: 1940, rating: "PG", description: "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.")
# comedy2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Dictator.png")
# comedy2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Dictator.mp4")
# comedy2.poster.attach(io: comedy2_poster, filename: "comedy2_poster.png")
# comedy2.film.attach(io: comedy2_film, filename: "comedy2.mp4")

# comedy3 = Film.create!(genre: 'comedy', title: "Scott Pilgrim Vs The World", year: 2010, rating: "PG-13", description: "Scott Pilgrim must vanquish all seven exes in martial arts battles of the dream girl that captures his heart.")
# comedy3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Pilgrim.png")
# comedy3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Pilgrim.mp4")
# comedy3.poster.attach(io: comedy3_poster, filename: "comedy3_poster.png")
# comedy3.film.attach(io: comedy3_film, filename: "comedy3.mp4")

comedy4 = Film.create!(genre: 'comedy', title: "Safety Not Guaranteed", year: 2012, rating: "R", description: "A team of journalists are sent to find out who's behind a classified ad seeking a companion for time travel.")
comedy4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Safety.png")
comedy4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Safety.mp4")
comedy4.poster.attach(io: comedy4_poster, filename: "comedy4_poster.png")
comedy4.film.attach(io: comedy4_film, filename: "comedy4.mp4")

comedy5 = Film.create!(genre: 'comedy', title: "Ghostbusters", year: 1984, rating: "PG", description: "Parapsychologists create a business exterminating ghouls and hobgoblins -- and end up facing one killer demon in a cellist's apartment.")
comedy5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Ghostbusters.png")
comedy5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Ghostbusters.mp4")
comedy5.poster.attach(io: comedy5_poster, filename: "comedy5_poster.png")
comedy5.film.attach(io: comedy5_film, filename: "comedy5.mp4")

comedy6 = Film.create!(genre: 'comedy', title: "Hot Fuzz", year: 2007, rating: "R", description: "A top London cop is assigned to investigate a seemingly sleepy town, which suddenly starts to stir with a series of grisly accidents.")
comedy6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Hot.png")
comedy6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Hot.mp4")
comedy6.poster.attach(io: comedy6_poster, filename: "comedy6_poster.png")
comedy6.film.attach(io: comedy6_film, filename: "comedy6.mp4")

# comedy7 = Film.create!(genre: 'comedy', title: "Step Brothers", year: 2008, rating: "R", description: "Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.")
# comedy7_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Step.png")
# comedy7_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Step.mp4")
# comedy7.poster.attach(io: comedy7_poster, filename: "comedy7_poster.png")
# comedy7.film.attach(io: comedy7_film, filename: "comedy7.mp4")

# comedy8 = Film.create!(genre: 'comedy', title: "The Hangover", year: 2009, rating: "R", description: "When three friends finally wake up after a wild bachelor party, they can't locate their best friend, who's supposed to be tying the knot.")
# comedy8_poster = open("https://webfilms-films.s3.amazonaws.com/posters/comedy/Hangover.png")
# comedy8_film = open("https://webfilms-films.s3.amazonaws.com/videos/Comedy/Hangover.mp4")
# comedy8.poster.attach(io: comedy8_poster, filename: "comedy8_poster.png")
# comedy8.film.attach(io: comedy8_film, filename: "comedy8.mp4")

# ###ADVENTURES

adventure1 = Film.create!(genre: 'adventure', title: "Back To The Future", year: 1985, rating: "PG", description: "Marty McFly accidentally drives a time machine to 1955 and races the clock to ensure his future parents fall in love.")
adventure1_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Future.png")
adventure1_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Future.mp4")
adventure1.poster.attach(io: adventure1_poster, filename: "adventure1_poster.png")
adventure1.film.attach(io: adventure1_film, filename: "adventure1.mp4")

adventure2 = Film.create!(genre: 'adventure', title: "Jurassic Park", year: 1993, rating: "PG-13", description: "A theme park with live dinosaurs turns disasterous when the dinosaurs escape.")
adventure2_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Jurassic.png")
adventure2_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Jurassic.mp4")
adventure2.poster.attach(io: adventure2_poster, filename: "adventure2_poster.png")
adventure2.film.attach(io: adventure2_film, filename: "adventure2.mp4")

adventure3 = Film.create!(genre: 'adventure', title: "Mission Impossible 4: Ghost Protocol", year: 2011, rating: "PG-13", description: "Super-agent Ethan Hunt and his team take on another deadly mission... to prove their innocence when they are framed for bombing the Kremlin.")
adventure3_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Mission.png")
adventure3_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Mission.mp4")
adventure3.poster.attach(io: adventure3_poster, filename: "adventure3_poster.png")
adventure3.film.attach(io: adventure3_film, filename: "adventure3.mp4")

# adventure4 = Film.create!(genre: 'adventure', title: "Indiana Jones And The Raiders Of The Lost Ark", year: 1981, rating: "PG", description: "Indiana Jones battles nazis as he tries to locate the legendary Ark of the Covenant.")
# adventure4_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Raiders.png")
# adventure4_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Raiders.mp4")
# adventure4.poster.attach(io: adventure4_poster, filename: "adventure4_poster.png")
# adventure4.film.attach(io: adventure4_film, filename: "adventure4.mp4")

# adventure5 = Film.create!(genre: 'adventure', title: "Spider-Man Into The Spider-Verse", year: 2018, rating: "PG", description: "After being bitten by a radioactive spider, a Brooklyn teen gets a crash course in web-slinging from his alternate-dimension counterparts.")
# adventure5_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Spider.png")
# adventure5_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Spider.mp4")
# adventure5.poster.attach(io: adventure5_poster, filename: "adventure5_poster.png")
# adventure5.film.attach(io: adventure5_film, filename: "adventure5.mp4")

# adventure6 = Film.create!(genre: 'adventure', title: "Revenant", year: 2015, rating: "R", description: "In the 1820s, a fur trapper struggles for survival to exact retribution agaist a ruthless mercenary who left him to die along the Missouri River.")
# adventure6_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Revenant.png")
# adventure6_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Revenant.mp4")
# adventure6.poster.attach(io: adventure6_poster, filename: "adventure6_poster.png")
# adventure6.film.attach(io: adventure6_film, filename: "adventure6.mp4")

# adventure7 = Film.create!(genre: 'adventure', title: "Charlie And The Chocolate Factory", year: 2005, rating: "PG", description: "The eccentric Willy Wonka opens the doors of his candy factory to five lucky kids who learn the secrets behind his amazing confections.")
# adventure7_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Charlie.png")
# adventure7_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Charlie.mp4")
# adventure7.poster.attach(io: adventure7_poster, filename: "adventure7_poster.png")
# adventure7.film.attach(io: adventure7_film, filename: "adventure7.mp4")

# adventure8 = Film.create!(genre: 'adventure', title: "Kubo And The Two Strings", year: 2016, rating: "PG", description: "In feudal Japan, a one-eyed boy with musical magic powers searches for his father's enchanted armor, pursued by his evil grandfather, the Moon King.")
# adventure8_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Kubo.png")
# adventure8_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Kubo.mp4")
# adventure8.poster.attach(io: adventure8_poster, filename: "adventure8_poster.png")
# adventure8.film.attach(io: adventure8_film, filename: "adventure8.mp4")

# adventure9 = Film.create!(genre: 'adventure', title: "Hugo", year: 2011, rating: "PG", description: "On the Paris streets, a fearless orphan keeps the city's time as a scavanger hunt begins. The prize? His biggest wish.")
# adventure9_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Hugo.png")
# adventure9_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Hugo.mp4")
# adventure9.poster.attach(io: adventure9_poster, filename: "adventure9_poster.png")
# adventure9.film.attach(io: adventure9_film, filename: "adventure9.mp4")

# adventure10 = Film.create!(genre: 'adventure', title: "Tomb Raider", year: 2018, rating: "PG-13", description: "Seven years after her wealthy dad's mysterious disappearance, Lara Croft embarks on a quest to discover his fate using the clues he left behind.")
# adventure10_poster = open("https://webfilms-films.s3.amazonaws.com/posters/adventure/Tomb.png")
# adventure10_film = open("https://webfilms-films.s3.amazonaws.com/videos/Adventure/Tomb.mp4")
# adventure10.poster.attach(io: adventure10_poster, filename: "adventure10_poster.png")
# adventure10.film.attach(io: adventure10_film, filename: "adventure10.mp4")