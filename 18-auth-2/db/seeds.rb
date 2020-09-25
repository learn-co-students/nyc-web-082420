# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Favorite.destroy_all
Candle.destroy_all
DogUser.destroy_all


candles = ["https://lh3.googleusercontent.com/proxy/n3xmVUfer4VXgndgYHcfQZjh0ZB0yx8OlK_N6hnwCpaqg70tW9Dks0-Cc5Yc1vr4C5mJgWYOEaap9BoPiSBxbplInSq6rWkjuw7MFGMg2pGsAK9j1u__QrUn5HT_KbTQWCas8g", "https://lh3.googleusercontent.com/proxy/38YQ8o3jmWxbMNpFtrFv3JL7rYeorYlrhsu0b4qUOdGAL_T4vSkBIhQcqcWJ2EcaBkh9Ju7g1zzdxpcZmqAhkGaDsCZg0gPjEMw-mj4smTTNeuLya4Gx5Ntnrw", "https://lh3.googleusercontent.com/proxy/tIl1OloJ_5WCStj_akeNPqW7VDNAMSzik9OGIra6yIKB5CtmOOTkIlxIaWZ_aEpUedMyeKKriKsfUjkjOWwDMZrc8I-nBMW7gcw4O-S4c5SM94xUSaoNvFu9DWJLu3V2TY_d", "https://lh3.googleusercontent.com/proxy/rz5YFJOIIcbvrmXShPrDatV-kpbDFKvFvKYaUZbRP-FL8eGyovPgroOoEoFmgJ6HT6jWJ1FfbnJ6sBYwAmxM0swkkV1e03I4jeILRP3q1O2xq1oCtLGCmNCYhhYlE1Q", "https://lh3.googleusercontent.com/proxy/ifCMWH9Bb58uEaydtitSLEMgCybUgYu63IgDPrRNVI64uSnK7cgPKJJDrneyrtIRW0tNux_TCpp5bTmbVUMfYKa2vnRiab4NEDAwZzuJU48Iw21MPdhv78L4gMU3g4UpFdG2QEeZ", "https://lh3.googleusercontent.com/proxy/l7ncLRoJO7biVEIQun78g_jQRtm8BjzKk6bAT9FqcVWCfYr3BE4yo1H0mP7MJYqvVEBqFgxFTY6M310oZm8EzBNYbGP5ICU3VNpW48iRnw4XXr5zRDgaUT_kafND1tI", "https://lh3.googleusercontent.com/proxy/n3xmVUfer4VXgndgYHcfQZjh0ZB0yx8OlK_N6hnwCpaqg70tW9Dks0-Cc5Yc1vr4C5mJgWYOEaap9BoPiSBxbplInSq6rWkjuw7MFGMg2pGsAK9j1u__QrUn5HT_KbTQWCas8g"]

20.times do 
  Candle.create(name: Faker::Creature::Dog.name, scent: Faker::Creature::Dog.breed, price: rand(100..500), img_url: candles.sample)
end 


20.times do 
  DogUser.create(name: Faker::Books::Dune.character, age: rand(1..20), breed: Faker::Creature::Dog.breed, password: "abc123")
end 


50.times do 
  Favorite.create(dog_user_id: DogUser.all.sample.id, candle_id: Candle.all.sample.id)
end 