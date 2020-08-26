# this file serves as my playground / testing area 
require 'pry'
require_relative './app/models/user.rb'


jessica = User.new("Jessica", 47)
gabriel = User.new("Gabriel", 38, 1234)

# jessica.increment_views

# increase_hp 

# drink_potion that will call on increase_hp


binding.pry