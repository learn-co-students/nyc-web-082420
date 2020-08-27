# this file serves as my playground / testing area 
require 'pry'
require_relative './app/models/user.rb'
require_relative './app/models/animal.rb'


jessica = User.new("Jessica", 47)
gabriel = User.new("Gabriel", 38)
gerard = User.new("Gerard", 21)
madeline = User.new("Madeline", 22)

animals = [
    {species: 'cat', name: 'nimr', noise: 'yowl'}, #Mahdi
    {species: 'dog', name: 'moose', noise: 'woof'}, #Chloe
    {species: 'dog', name: 'pierre', noise: 'oui oui'},
    {species: 'dog', name: 'mac', noise: 'woof'}, #david
    {species: 'sourdough starter', name: 'ruby', noise: 'bloop'}, #austin
    {species: 'turtle', name: 'humphry', noise: 'squirt'}, #mushfi
    {species: 'cat', name: 'minx', noise: 'MEEOWW'}, #ashab
    {species: 'dog', name: 'ziggy', noise: 'imma nap now'}, #bryn
    {species: 'cat', name: 'zarro', noise: 'wow'}, #JD
    {species: 'cat', name: 'rick', noise: 'quack'} #jason
]

# make a new animal a la Animal.new for each hash in the array 
# each, map, collect, select, filter, find 
animals.each do |animal|
    Animal.new(animal[:species], animal[:name], animal[:noise])
end

mojo = Animal.new('cat', 'mojo', 'woof', jessica) 
grady = Animal.new('cat', 'grady', 'purrrrr', jessica) 
jerry = Animal.new('cat', 'jerry', 'sneeze', gabriel) 
april = Animal.new('dog', 'april', 'woof', gerard) 
peyton = Animal.new('cat', 'peyton', 'scream', madeline) 

# jessica train grady
# jessica train april 

binding.pry