require 'pry'
require_relative './app/models/user'

animals = [
    {species: 'cat', name: 'mojo', noise: 'woof'}, 
    {species: 'cat', name: 'grady', noise: 'purrrrrr'}, 
    {species: 'cat', name: 'jerry', noise: 'sneeze'}, 
    {species: 'nimr', name: 'grady', noise: 'yowl'}, 
    {species: 'peyton', name: 'grady', noise: 'scream'}, 
    {species: 'april', name: 'dog', noise: 'woof'}, 
    {species: 'humphry', name: 'turtle', noise: 'squirt'}, 
    {species: 'cat', name: 'rick', noise: 'quack'}
]


def animals_cli(animals_array)  
    puts "Welcome to the Pet Adoption CLI"
    puts "Choose an option by number"
    puts "1. See all pets"
    puts "2. See all cats"
    puts "3. Find a pet by name"
    user_input = gets.chomp
    if user_input == "1"
        animals_array.collect do |animal|
            animal[:name]
        end
    elsif user_input == "2"
        animals_array.filter { |animal| animal[:species] == 'cat' }
    elsif user_input == "3"
        puts "What is the animals name?"
        animal_name = gets.chomp
        animals_array.find { |animal| animal[:name] == animal_name } 
    end
end


def run 
    puts "Welcome, please sign up"
    puts "What is your name?"
    name = gets.chomp 
    puts "What is your age?"
    age = gets.chomp 
    puts "What is your social security number?"
    ssn = gets.chomp 
    user = User.new(name, age, ssn)

    puts "What would you like to do?"
    puts "1. View Profile"
    puts "2. Edit SSN"
    choice = gets.chomp

    if choice == "1"
        user.view_profile
    elsif choice == "2"
        puts "What is your new SSN?"
        new_ssn = gets.chomp.to_i
        user.ssn = new_ssn
    end

    binding.pry 
end



binding.pry 