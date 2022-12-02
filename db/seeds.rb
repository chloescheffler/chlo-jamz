require 'date'

User.destroy_all
Playlist.destroy_all
Genre.destroy_all
Song.destroy_all
Comment.destroy_all
SongPlaylist.destroy_all

puts "Creating seeds 🌱..."

U1 = User.create!(user_name: "KunElite2022", password: "ilovepasta12", date_of_birth: DateTime.new(1999, 10, 16), age: 23, pronouns: "he/him", bio: "Cybersecurity | Dog-Lover 🐕 | Based in Atlanta, GA", profile_pic_url: "https://www.flaticon.com/free-icon/man_3800457?term=black%20user&page=1&position=34&page=1&position=34&related_id=3800457&origin=search")
U2 = User.create!(user_name: "TouRine", password: "ilikepizza", date_of_birth: DateTime.new(2000, 3, 21), age: 22, pronouns: "he/him", bio: "Hiya! 👋", profile_pic_url: "https://www.flaticon.com/free-icon/man_4140061?term=black%20user&page=1&position=61&page=1&position=61&related_id=4140061&origin=search")
U3 = User.create!(user_name: "Chlomoney", password: "chloelovesmonay", date_of_birth: DateTime.new(2002, 5, 2), age: 20, pronouns: "she/her", bio: "What's up guyssss! Future Software Developer @ Flatiron School #goflatiron #happycoding! 👩‍💻", profile_pic_url: "https://www.flaticon.com/free-icon/woman_4140049?term=black%20user&page=1&position=66&page=1&position=66&related_id=4140049&origin=search")
U4 = User.create!(user_name: "TaiLr", password: "ttimestwo", date_of_birth: DateTime.new(1989, 7, 4), age: 33, pronouns: "he/him", bio: "Sup guys, I love every type of music. Hit me up and listen to my playlist. 😘", profile_pic_url: "https://www.flaticon.com/free-icon/man_4139981?term=black%20user&page=1&position=50&page=1&position=50&related_id=4139981&origin=search")

puts "Creating playlists..."

P1 = Playlist.create!(playlist_name: "Mood: Happy")
P2 = Playlist.create!(playlist_name: "Mood: Sad")
P3 = Playlist.create!(playlist_name: "Mood: Angry")
P4 = Playlist.create!(playlist_name: "Mood: Mellow")

puts "Creating genres 🎵..."

G1 = Genre.create(name: "Rap")
G2 = Genre.create(name: "Hip-Hop/R&B")
G3 = Genre.create(name: "Classic Rock")
G4 = Genre.create(name: "Holiday")
G5 = Genre.create(name: "Dance/EDM")
G6 = Genre.create(name: "K-Pop")
G7 = Genre.create(name: "Afrobeat")
G8 = Genre.create(name: "Latin")
G9 = Genre.create(name: "Country")
G10 = Genre.create(name: "Pop")

puts "Creating songs 🎵..."

S1 = Song.create!(name: "Rich Flex", artist: "Drake ft. 21 Savage", url: "https://youtu.be/I4DjHHVHWAE", album_url: "https://media.pitchfork.com/photos/636509072145df8a03cc87b0/1:1/w_320,c_limit/Drake.jpg",genre_id: G1.id)
S2 = Song.create!(name: "Super Freaky Girl", artist: "Nicki Minaj", url: "https://youtu.be/j5uAR9w7LBg", album_url: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/jmzxiu7eyrmqbvlezgia/nicki-art-0?fimg-ssr",genre_id: G2.id)
S3 = Song.create!(name: "Just Wanna Rock", artist: "Lil Uzi Vert", url: "https://youtu.be/UhbixyxgsiU", album_url: "https://preview.redd.it/lu44are5jev91.jpg?width=1024&format=pjpg&auto=webp&s=e02bf3fb2c9f45c7c6dbbd9da910764504e8cbfc",genre_id: G3.id)
S4 = Song.create!(name: "Tomorrow 2", artist: "GloRilla", url: "https://youtu.be/zwa7NzNBQig", album_url: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/af/75/91/af759110-b761-b5f9-8061-19c759a9c663/22UM1IM04250.rgb.jpg/1200x1200bb.jpg",genre_id: G4.id)
S5 = Song.create!(name: "Freestyle", artist: "Lil Baby", url: "https://youtu.be/MHryuYVyHhk", album_url: "https://www.whosampled.com/static/track_images_200/lr1782_201835_0443979989.jpg",genre_id: G5.id)
S6 = Song.create!(name: "Puffin on Zooties", artist: "Future", url: "https://youtu.be/H8E0WIy_vFc", album_url: "https://media.pitchfork.com/photos/626be39b8eeb4ac0c1275b4e/1:1/w_320,c_limit/Future-I-Never-Liked-You-2022.jpeg",genre_id: G1.id)
S7 = Song.create!(name: "Hotel Lobby", artist: "Quavo & Takeoff", url: "https://youtu.be/Om0rYw6qzb8", album_url: "https://hiphopwired.com/wp-content/uploads/sites/43/2022/05/16530661430862.jpeg?strip=all&quality=85&w=1200&crop=0,0,100,1200px",genre_id: G2.id)
S8 = Song.create!(name: "First Day Out", artist: "Tee Grizzley", url: "https://youtu.be/pWh4O6ujK4o", album_url: "https://upload.wikimedia.org/wikipedia/en/6/6e/Tee_Grizzley_-_First_Day_Out_single_cover.png",genre_id: G3.id)
S9 = Song.create!(name: "Walk It Talk It", artist: "Migos ft. Drake", url: "https://youtu.be/fGqdIPer-ms", album_url: "https://upload.wikimedia.org/wikipedia/en/0/0e/Migos_-_Walk_It_Talk_It.jpg",genre_id: G4.id)
S10 = Song.create!(name: "Plug Walk", artist: "Rich the Kid", url: "https://youtu.be/ToY6sjSV8h8", album_url: "https://upload.wikimedia.org/wikipedia/en/e/e9/Rich_the_Kid_Plug_Walk.jpg",genre_id: G5.id)

S11 = Song.create!(name: "Under the Influence", artist: "Chris Brown", url: "https://youtu.be/pfxyk1glEq4", album_url: "https://upload.wikimedia.org/wikipedia/en/1/1f/Chris_Brown_-_Indigo.png",genre_id: G1.id)
S12 = Song.create!(name: "Shirt", artist: "SZA", url: "https://youtu.be/hdFDrjfW548", album_url: "https://media.pitchfork.com/photos/635a993ad47437f38fa90ce2/1:1/w_320,c_limit/SZA-Shirt.jpg",genre_id: G2.id)
S13 = Song.create!(name: "All Mine", artist: "Brent Faiyaz", url: "https://youtu.be/CHtfJ-UZJM4", album_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Brent_Faiyaz_-_Wasteland.jpeg",genre_id: G3.id)
S14 = Song.create!(name: "Free Mind", artist: "Tems", url: "https://youtu.be/e8GzTXRAJ30", album_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Damages_album_art.jpg",genre_id: G4.id)
S15 = Song.create!(name: "Hrs and Hrs", artist: "Muni Long", url: "https://youtu.be/okfR_VIbXEQ", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_2022117_124317108429.jpg",genre_id: G5.id)
S16 = Song.create!(name: "Over", artist: "Lucky Daye", url: "https://youtu.be/Ylf8gJQe8So", album_url: "https://media.pitchfork.com/photos/623c940c6ed62aa5918edcae/1:1/w_320,c_limit/lucky-daye-candydrip.jpeg",genre_id: G1.id)
S17 = Song.create!(name: "Say It", artist: "Tory Lanez", url: "https://youtu.be/xUq1rZ7mmns", album_url: "https://www.whosampled.com/static/track_images_200/lr60124_2015731_161759954039.jpg",genre_id: G2.id)
S18 = Song.create!(name: "Don't", artist: "Bryson Tiller", url: "https://youtu.be/d7cVLE4SaN0", album_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/Trapsoulalbum.jpeg",genre_id: G3.id)
S19 = Song.create!(name: "Break from Toronoto", artist: "PARTYNEXTDOOR", url: "https://youtu.be/lXYq9ImJIN8", album_url: "https://www.whosampled.com/static/track_images_200/lr66566_201399_101110883561.jpg",genre_id: G4.id)
S20 = Song.create!(name: "Crew", artist: "Goldlink ft. Brent Faiyaz, Shy Glizzy", url: "https://youtu.be/nhNqbe6QENY", album_url: "https://www.whosampled.com/static/track_images_200/lr77573_201768_194722183818.jpg",genre_id: G5.id)

S21 = Song.create!(name: "Drogba", artist: "Afro B", url: "https://youtu.be/9YqecbxSr4A", album_url: "https://www.whosampled.com/static/track_images_200/lr37827_20181229_22522302854.jpg",genre_id: G1.id)
S22 = Song.create!(name: "Kontrol", artist: "Maleek Berry", url: "https://youtu.be/Si0ZHJdlu9M", album_url: "https://www.whosampled.com/static/track_images_200/lr40825_201746_174523938880.jpg",genre_id: G2.id)
S23 = Song.create!(name: "Do Like That", artist: "Koredo Bello", url: "https://youtu.be/hJBi780qFas", album_url: "https://www.whosampled.com/static/track_images_200/lr104798_2017227_63210392154.jpg",genre_id: G3.id)
S24 = Song.create!(name: "Leg Over", artist: "Mr. Eazi", url: "https://youtu.be/v15sS1sL_S4", album_url: "https://www.whosampled.com/static/track_images_200/lr53965_2017914_01942277761.jpg",genre_id: G4.id)
S25 = Song.create!(name: "Ye", artist: "Burna Boy", url: "https://youtu.be/lPe09eE6Xio", album_url: "https://www.whosampled.com/static/track_images_200/lr1782_2018417_134727865451.jpg",genre_id: G5.id)
S26 = Song.create!(name: "Love Nwantiti", artist: "CKay ft. Joeboy & Kuami Eugene", url: "https://youtu.be/D-YDEyuDxWU", album_url: "https://www.whosampled.com/static/track_images_200/lr257833_2021924_15497189551.jpg",genre_id: G1.id)
S27 = Song.create!(name: "Joro", artist: "Wizkid", url: "https://youtu.be/9YqecbxSr4A", album_url: "https://e-cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/264x264-000000-80-0-0.jpg",genre_id: G2.id)
S28 = Song.create!(name: "Pana", artist: "Tekno", url: "https://youtu.be/8YhAFBOSk1U", album_url: "https://www.whosampled.com/static/track_images_200/lr37827_2020613_22353470298.jpg",genre_id: G3.id)
S29 = Song.create!(name: "Collabo", artist: "PSquare ft. Don Jazzy", url: "https://youtu.be/tUvF7yj531A", album_url: "https://upload.wikimedia.org/wikipedia/en/f/fa/P-Square_-_Double_Trouble_cover.jpg",genre_id: G4.id)
S30 = Song.create!(name: "Johnny", artist: "Yemi Alade", url: "https://youtu.be/C_XkTKoDI18", album_url: "https://www.whosampled.com/static/track_images_200/lr104798_201542_21012817191.jpg",genre_id: G5.id)

S31 = Song.create!(name: "Pepas", artist: "Farruko", url: "https://youtu.be/y8trd3gjJt0", album_url: "https://www.whosampled.com/static/track_images_200/lr258053_20211231_123141241251.jpg",genre_id: G1.id)
S32 = Song.create!(name: "CALLAÍTA", artist: "Bad Bunny", url: "https://youtu.be/acEOASYioGY", album_url: "https://www.whosampled.com/static/track_images_200/lr206118_2019531_65428700397.jpg",genre_id: G2.id)
S33 = Song.create!(name: "Ginza", artist: "J. Balvin", url: "https://youtu.be/zZjSX01P5dE", album_url: "https://www.whosampled.com/static/track_images_200/lr148842_201675_154619124085.jpg",genre_id: G3.id)
S34 = Song.create!(name: "Eres Mia", artist: "Romeo Santos", url: "https://youtu.be/8iPcqtHoR3U", album_url: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-148804-81hs2lz0ttl-sl1500-1394212078.jpg",genre_id: G4.id)
S35 = Song.create!(name: "Obsesión", artist: "Aventura ft. Judy Santos", url: "https://youtu.be/C_XkTKoDI18", album_url: "https://www.whosampled.com/static/track_images_200/lr2763_20091211_20739225680.jpg",genre_id: G5.id)
S36 = Song.create!(name: "Danza Kuduro", artist: "Don Omar ft. Lucenzo", url: "https://youtu.be/C_XkTKoDI18", album_url: "https://www.whosampled.com/static/track_images_200/lr40825_2013424_162547981730.jpg",genre_id: G1.id)
S37 = Song.create!(name: "Suavamente", artist: "Elvis Crespo", url: "https://youtu.be/WPiEbYSF9kE", album_url: "https://www.whosampled.com/static/track_images_200/lr2364_2009823_183537688299.jpg",genre_id: G2.id)
S38 = Song.create!(name: "Chantaje", artist: "Shakira ft. Maluma", url: "https://youtu.be/6Mgqbai3fKo", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_2017428_161147655186.jpg",genre_id: G3.id)
S39 = Song.create!(name: "Bailando", artist: "Enrique Iglesias ft. Descemer Bueno, Gente De Zona", url: "https://youtu.be/NUsoVlDFqZg", album_url: "https://www.whosampled.com/static/track_images_200/lr40825_201519_15464577192.jpg",genre_id: G4.id)
S40 = Song.create!(name: "El Amante", artist: "Nicky Jam", url: "https://youtu.be/YG2p6XBuSKA", album_url: "https://www.whosampled.com/static/track_images_200/lr53965_2017912_32355124957.jpg",genre_id: G5.id)

S41 = Song.create!(name: "Tequila", artist: "Dan + Shay", url: "https://youtu.be/c4qgqNS_20s", album_url: "https://www.whosampled.com/static/track_images_200/lr206118_201964_23032929469.jpg",genre_id: G1.id)
S42 = Song.create!(name: "Tennessee Whiskey", artist: "Chris Stapleton", url: "https://youtu.be/4zAThXFOy2c", album_url: "https://www.whosampled.com/static/track_images_200/lr216296_201851_23738171128.jpg",genre_id: G2.id)
S43 = Song.create!(name: "Blue Ain't Your Color", artist: "Keith Urban", url: "https://youtu.be/SoIKv3xxuMA", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_20161018_155825265777.jpg",genre_id: G3.id)
S44 = Song.create!(name: "As Good As I Once Was", artist: "Toby Keith", url: "https://youtu.be/ldQrapQ4d0Y", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_20221024_35447863318.jpg",genre_id: G4.id)
S45 = Song.create!(name: "Beer Never Broke My Heart", artist: "Luke Combs", url: "https://youtu.be/7Lb9dq-JZFI", album_url: "https://www.whosampled.com/static/track_images_200/lr157999_2022617_22154968504.jpg",genre_id: G5.id)
S46 = Song.create!(name: "Chicken Fried", artist: "Zac Brown Band", url: "https://youtu.be/e4ujS1er1r0", album_url: "https://www.whosampled.com/static/track_images_200/lr84389_201464_19116334624.jpg",genre_id: G1.id)
S47 = Song.create!(name: "Dirt Road Anthem", artist: "Jason Aldean", url: "https://youtu.be/Lb9q1ScC4cg", album_url: "https://www.whosampled.com/static/track_images_200/lr2848_2011710_162743442447.jpg",genre_id: G2.id)
S48 = Song.create!(name: "This Is How We Roll", artist: "Florida Georgia Line ft. Luke Bryan", url: "https://youtu.be/CbxuXq_981s", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_2014922_161545106763.jpg",genre_id: G3.id)
S49 = Song.create!(name: "Boys 'Round Here", artist: "Blake Shelton ft. Pistol Annies & Friends", url: "https://youtu.be/JXAgv665J14", album_url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Blake_Shelton_Boys_%27Round_Here.jpg",genre_id: G4.id)
S50 = Song.create!(name: "Before He Cheats", artist: "Carrie Underwood", url: "https://youtu.be/WaSy8yy-mr8", album_url: "https://www.whosampled.com/static/track_images_200/lr7710_2010425_152610872837.jpg",genre_id: G5.id)

S51 = Song.create!(name: "POP!", artist: "NAYEON", url: "https://youtu.be/f6YDKF0LVWw", album_url: "https://www.whosampled.com/static/track_images_200/lr157999_2022812_02459829279.jpg",genre_id: G1.id)
S52 = Song.create!(name: "Dynamite", artist: "BTS", url: "https://youtu.be/gdZLi9oWNZg", album_url: "https://www.whosampled.com/static/track_images_200/lr238530_202091_201915588655.jpg",genre_id: G2.id)
S53 = Song.create!(name: "GANGNAM STYLE", artist: "PSY", url: "https://youtu.be/9bZkp7q19f0", album_url: "https://www.whosampled.com/static/track_images_200/lr2825_2012912_15716306714.jpg",genre_id: G3.id)
S54 = Song.create!(name: "Dragon", artist: "TEMPEST", url: "https://youtu.be/ZOZDznZYJkU", album_url: "https://thebiaslistcom.files.wordpress.com/2022/11/tempest-dragon.jpg",genre_id: G4.id)
S55 = Song.create!(name: "The Feels", artist: "TWICE", url: "https://youtu.be/f5_wn8mexmM", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_20211019_11204341190.jpg",genre_id: G5.id)
S56 = Song.create!(name: "How You Like That", artist: "BLACKPINK", url: "https://youtu.be/32si5cfrCNc", album_url: "https://www.whosampled.com/static/track_images_200/lr198616_2020626_11234166513.jpg",genre_id: G1.id)
S57 = Song.create!(name: "Thunderous", artist: "Stray Kids", url: "https://youtu.be/EaswWiwMVs8", album_url: "https://upload.wikimedia.org/wikipedia/en/5/59/Stray_Kids_-_Noeasy_%28Digital%29.jpeg",genre_id: G2.id)
S58 = Song.create!(name: "Oh!", artist: "Girls' Generation", url: "https://youtu.be/TGbwL8kSpEk", album_url: "https://www.whosampled.com/static/track_images_200/lr235_201178_234357952567.jpg",genre_id: G3.id)
S59 = Song.create!(name: "Heart Attack", artist: "Exo-K", url: "https://youtu.be/Vxo90RHlGz0", album_url: "https://i1.sndcdn.com/artworks-000053431602-xd98ja-t500x500.jpg",genre_id: G4.id)
S60 = Song.create!(name: "Boys Like You", artist: "ITZY", url: "https://youtu.be/6uZy86ePgO0", album_url: "https://upload.wikimedia.org/wikipedia/en/a/ae/Boys_like_you_itzy.png",genre_id: G5.id)

S61 = Song.create!(name: "Anti-Hero", artist: "Taylor Swift", url: "https://youtu.be/b1kbLwvqugk", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_20221021_13125919608.jpg",genre_id: G1.id)
S62 = Song.create!(name: "New Rules", artist: "Dua Lipa", url: "https://youtu.be/k2qgadSvNyU", album_url: "https://www.whosampled.com/static/track_images_200/lr136413_201782_181212698944.jpg", genre_id: G2.id)
S63 = Song.create!(name: "Kiss Me More", artist: "Doja Cat ft. SZA", url: "https://youtu.be/0EVVKs6DQLo", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_202149_152021559040.jpg", genre_id: G3.id)
S64 = Song.create!(name: "Feels", artist: "Calvin Harris ft. Katy Perry, Pharrell Williams, Big Sean", url: "https://youtu.be/ozv4q2ov3Mk", album_url: "https://www.whosampled.com/static/track_images_200/lr163919_2017627_102222467814.jpg", genre_id: G4.id)
S65 = Song.create!(name: "Happier", artist: "Marshmello ft. Bastille", url: "https://youtu.be/m7Bc3pLyij0", album_url: "https://www.whosampled.com/static/track_images_200/lr198616_20181019_6259599860.jpg", genre_id: G5.id)
S66 = Song.create!(name: "Cake By The Ocean", artist: "DNCE", url: "https://youtu.be/vWaRiD5ym74", album_url: "https://www.whosampled.com/static/track_images_200/lr102230_2016416_91457637751.jpg", genre_id: G1.id)
S67 = Song.create!(name: "Rather Be", artist: "Clean Bandit ft. Jess Glynne", url: "https://youtu.be/m-M1AtrxztU", album_url: "https://www.whosampled.com/static/track_images_200/lr2_201449_163112268695.jpg", genre_id: G2.id)
S68 = Song.create!(name: "STAY", artist: "The Kid LAROI ft. Justin Bieber", url: "https://youtu.be/kTJczUoc26U", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_202179_1622675079.jpg", genre_id: G3.id)
S69 = Song.create!(name: "Heat Waves", artist: "Glass Animals", url: "https://youtu.be/mRD0-GxqHVo", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_2021126_145944434091.jpg", genre_id: G4.id)
S70 = Song.create!(name: "Bad Habits", artist: "Ed Sheeran", url: "https://youtu.be/orJSJGHjBLI", album_url: "https://www.whosampled.com/static/track_images_200/lr282573_2021625_165526859590.jpg", genre_id: G5.id)

S71 = Song.create!(name: "Last Christmas", artist: "Wham!", url: "https://youtu.be/E8gmARGvPlI", album_url: "https://www.whosampled.com/static/track_images_200/lr2364_2009818_19534527814.jpg", genre_id: G1.id)
S72 = Song.create!(name: "All I Want Christmas For You", artist: "Mariah Carey", url: "https://youtu.be/yXQViqx6GMY", album_url: "https://www.whosampled.com/static/track_images_200/lr2364_2010330_192119646169.jpg", genre_id: G2.id)
S73 = Song.create!(name: "This Christmas", artist: "Chris Brown", url: "https://youtu.be/b9XNyeeJZ2k", album_url: "https://resources.tidal.com/images/94c99c78/f18d/4162/87eb/b7b45403553a/640x640.jpg", genre_id: G3.id)
S74 = Song.create!(name: "Santa Tell Me", artist: "Ariana Grande", url: "https://youtu.be/nlR0MkrRklg", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_2016823_15465915171.jpg", genre_id: G4.id)
S75 = Song.create!(name: "Mistletoe", artist: "Justin Bieber", url: "https://youtu.be/LUjn3RpkcKY", album_url: "https://www.whosampled.com/static/track_images_200/lr2364_20111221_223524356798.jpg", genre_id: G5.id)
S76 = Song.create!(name: "Snowman", artist: "Sia", url: "https://youtu.be/gset79KMmt0", album_url: "https://www.whosampled.com/static/track_images_200/lr129799_20201210_175826853758.jpg", genre_id: G1.id)
S77 = Song.create!(name: "The Christmas Song", artist: "Nat King Cole", url: "https://youtu.be/wKhRnZZ0cJI", album_url: "https://www.whosampled.com/static/track_images_200/lr2825_20091213_21190472965.jpg", genre_id: G2.id)
S78 = Song.create!(name: "Underneath the Tree", artist: "Kelly Clarkson", url: "https://youtu.be/EM2Fnp_qnE8", album_url: "https://www.whosampled.com/static/track_images_200/lr75519_201413_03247394398.jpg",genre_id: G3.id)
S79 = Song.create!(name: "Wonderful Christmastime", artist: "Paul McCartney", url: "https://youtu.be/94Ye-3C1FC8", album_url: "https://www.whosampled.com/static/track_images_200/lr7710_2010415_194322220402.jpg", genre_id: G4.id)
S80 = Song.create!(name: "Santa Baby", artist: "Eartha Kitt", url: "https://youtu.be/HTCFi4l3nkY", album_url: "https://www.whosampled.com/static/track_images_200/lr2825_20091225_7285126351.jpg", genre_id: G5.id)

S81 = Song.create!(name: "Turn Down For What", artist: "DJ Snake & Lil Jon", url: "https://youtu.be/HMUDVMiITOU", album_url: "https://www.whosampled.com/static/track_images_200/lr3765_2014426_115748825056.jpg",genre_id: G1.id)
S82 = Song.create!(name: "Bangarang", artist: "SKRILLEX ft. Sirah", url: "https://youtu.be/YJVmu6yttiw", album_url: "https://www.whosampled.com/static/track_images_200/lr1728_2012324_16572887513.jpg",genre_id: G2.id)
S83 = Song.create!(name: "I Can't Stop", artist: "Flux Pavilion", url: "https://youtu.be/3Q9rewnLFYw", album_url: "https://www.whosampled.com/static/track_images_200/lr24249_2011722_1058838044.jpg",genre_id: G3.id)
S84 = Song.create!(name: "#SELFIE", artist: "Chainsmokers", url: "https://youtu.be/kdemFfbS5H0", album_url: "https://www.whosampled.com/static/track_images_200/lr53965_2014614_2251117042.jpg",genre_id: G4.id)
S85 = Song.create!(name: "Where Are Ü Now", artist: "Skrillex & Diplo ft. Justin Bieber", url: "https://youtu.be/nntGTK2Fhb0", album_url: "https://www.whosampled.com/static/track_images_200/lr102119_2016927_103356191096.jpg",genre_id: G5.id)
S86 = Song.create!(name: "Lean On", artist: "Major Lazer & DJ Snake ft. MO", url: "https://youtu.be/YqeW9_5kURI", album_url: "https://www.whosampled.com/static/track_images_200/lr53965_201556_22516673405.jpg",genre_id: G1.id)
S87 = Song.create!(name: "Wake Me Up", artist: "Avicii", url: "https://youtu.be/IcrbM1l_BoI", album_url: "https://www.whosampled.com/static/track_images_200/lr40825_2013924_212736454596.jpg",genre_id: G2.id)
S88 = Song.create!(name: "Don't You Worry Child", artist: "Swedish House Mafia ft. John Martin", url: "https://youtu.be/1y6smkh6c-0", album_url: "https://www.whosampled.com/static/track_images_200/lr7710_20121127_164751825262.jpg",genre_id: G3.id)
S89 = Song.create!(name: "Clarity", artist: "Zedd ft. Foxes", url: "https://youtu.be/IxxstCcJlsc", album_url: "https://www.whosampled.com/static/track_images_200/lr40825_2013212_19262795813.jpg",genre_id: G4.id)
S90 = Song.create!(name: "We Found Love", artist: "Rihanna ft. Calvin Harris", url: "https://youtu.be/tg00YEETFzg", album_url: "https://www.whosampled.com/static/track_images_200/lr5875_20111023_6212160214.jpg",genre_id: G5.id)

S91 = Song.create!(name: "Thunderstruck", artist: "AC/DC", url: "https://youtu.be/v2AC41dglnM", album_url: "https://www.whosampled.com/static/track_images_200/lr2581_200988_31754656945.jpg",genre_id: G1.id)
S92 = Song.create!(name: "Eye of the Tiger", artist: "Survivor", url: "https://youtu.be/btPJPFnesV4", album_url: "https://www.whosampled.com/static/track_images_200/lr168_20081224_19133727441.jpg",genre_id: G2.id)
S93 = Song.create!(name: "Sweet Child O' Mine", artist: "Guns N' Roses", url: "https://youtu.be/1w7OgIMMRc4", album_url: "https://www.whosampled.com/static/track_images_200/lr251_200918_222442106750.jpg",genre_id: G3.id)
S94 = Song.create!(name: "You Give Love A Bad Name", artist: "Bon Jovi", url: "https://youtu.be/KrZHPOeOxQQ", album_url: "https://www.whosampled.com/static/track_images_200/lr7710_2010414_21583337198.jpg",genre_id: G4.id)
S95 = Song.create!(name: "Pour Some Sugar On Me", artist: "Def Leppard", url: "https://youtu.be/0UIB9Y4OFPs", album_url: "https://www.whosampled.com/static/track_images_200/lr10179_2010619_115058407321.jpg",genre_id: G5.id)
S96 = Song.create!(name: "Black Betty", artist: "Ram Jam", url: "https://youtu.be/I_2D8Eo15wE", album_url: "https://www.whosampled.com/static/track_images_200/lr613_200938_1915989069.jpg",genre_id: G1.id)
S97 = Song.create!(name: "We Will Rock You", artist: "Queen", url: "https://youtu.be/-tJYN-eG1zk", album_url: "https://www.whosampled.com/static/track_images_200/lr184_2008121_132147596512.jpg",genre_id: G2.id)
S98 = Song.create!(name: "Still Loving You", artist: "Scorpions", url: "https://youtu.be/7pOr3dBFAeY", album_url: "https://www.whosampled.com/static/track_images_200/lr9268_2010328_11149134936.jpg",genre_id: G3.id)
S99 = Song.create!(name: "Faithfully", artist: "Journey", url: "https://youtu.be/OMD8hBsA-RI", album_url: "https://www.whosampled.com/static/track_images_200/lr2848_20091128_04243955055.jpg",genre_id: G4.id)
S100 = Song.create!(name: "Don't Let Me Down", artist: "The Beatles", url: "https://youtu.be/NCtzkaL2t_Y", album_url: "https://www.whosampled.com/static/track_images_200/lr126074_2016513_17223868849.jpg",genre_id: G5.id)

puts "Creating comments ✍️..."

C1 = Comment.create!(user_id: U1.id, song_id: S1.id, description: "This song fire no cap 🔥🔥")
C2 = Comment.create!(user_id: U2.id, song_id: S2.id, description: "🚮😬")
C3 = Comment.create!(user_id: U3.id, song_id: S3.id, description: "Who would've thought this song was gonna be a hit 10+ years ago")
C4 = Comment.create!(user_id: U4.id, song_id: S4.id, description: "Eh... it's okay 🫠")
C5 = Comment.create!(user_id: U1.id, song_id: S5.id, description: "I really like this song! ")
C6 = Comment.create!(user_id: U2.id, song_id: S6.id, description: "This song gives you so much nostalgia")
C7 = Comment.create!(user_id: U3.id, song_id: S7.id, description: "Straight 🗑️💩")
C8 = Comment.create!(user_id: U4.id, song_id: S8.id, description: "🔥🔥🔥")
C9 = Comment.create!(user_id: U1.id, song_id: S9.id, description: "AYOOOO?? THIS SLAPS!!")
C10 = Comment.create!(user_id: U2.id, song_id: S10.id, description: "Always coming out with straight BANGERS! 🔥")

SP1 = SongPlaylist.create(song_id: S1.id, playlist_id: P1.id)
SP2 = SongPlaylist.create(song_id: S2.id, playlist_id: P1.id)
SP3 = SongPlaylist.create(song_id: S3.id, playlist_id: P2.id)
SP4 = SongPlaylist.create(song_id: S4.id, playlist_id: P2.id)
SP5 = SongPlaylist.create(song_id: S5.id, playlist_id: P3.id)
SP6 = SongPlaylist.create(song_id: S1.id, playlist_id: P3.id)
SP7 = SongPlaylist.create(song_id: S6.id, playlist_id: P4.id)
SP8 = SongPlaylist.create(song_id: S1.id, playlist_id: P4.id)
SP9 = SongPlaylist.create(song_id: S2.id, playlist_id: P1.id)
SP10 = SongPlaylist.create(song_id: S10.id, playlist_id: P2.id)

puts "Done seeding!"