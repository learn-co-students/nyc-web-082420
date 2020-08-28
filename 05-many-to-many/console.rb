# this file serves as my playground / testing area 
require 'pry'
require_relative './app/models/user.rb'
require_relative './app/models/animal.rb'
require_relative './app/models/user_animal.rb'


johnnie = User.new("Johnnie", 22, 1234)
ashab = User.new("ashab", 22, 1234)
madeline = User.new("madeline", 22, 1234)
chloe = User.new("chloe", 22, 1234)

grady = Animal.new('cat', 'grady', 'purrrrr') 
mojo = Animal.new('cat', 'mojo', 'bark') 
jerry = Animal.new('cat', 'jerry', 'sneeze') 
appa = Animal.new('dog', 'appa', 'meow meow') 

UserAnimal.new(johnnie, grady)
UserAnimal.new(johnnie, jerry)
UserAnimal.new(chloe, mojo)
UserAnimal.new(ashab, appa)
UserAnimal.new(madeline, grady)
UserAnimal.new(chloe, grady)




binding.pry

# jessica = User.new("Jessica", 47)
# gabriel = User.new("Gabriel", 38)
# gerard = User.new("Gerard", 21)
# madeline = User.new("Madeline", 22)

# animals = [
#     {species: 'cat', name: 'nimr', noise: 'yowl'}, #Mahdi
#     {species: 'dog', name: 'moose', noise: 'woof'}, #Chloe
#     {species: 'dog', name: 'pierre', noise: 'oui oui'},
#     {species: 'dog', name: 'mac', noise: 'woof'}, #david
#     {species: 'sourdough starter', name: 'ruby', noise: 'bloop'}, #austin
#     {species: 'turtle', name: 'humphry', noise: 'squirt'}, #mushfi
#     {species: 'cat', name: 'minx', noise: 'MEEOWW'}, #ashab
#     {species: 'dog', name: 'ziggy', noise: 'imma nap now'}, #bryn
#     {species: 'cat', name: 'zarro', noise: 'wow'}, #JD
#     {species: 'cat', name: 'rick', noise: 'quack'} #jason
# ]
# animals.each do |animal|
#     Animal.new(animal[:species], animal[:name], animal[:noise])
# end

# mojo = Animal.new('cat', 'mojo', 'woof') 
# grady = Animal.new('cat', 'grady', 'purrrrr') 
# jerry = Animal.new('cat', 'jerry', 'sneeze') 
# april = Animal.new('dog', 'april', 'woof') 
# peyton = Animal.new('cat', 'peyton', 'scream') 
