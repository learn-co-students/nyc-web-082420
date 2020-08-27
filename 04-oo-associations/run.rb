# the run.rb files serves to house my CLI application. 
# the class methods used in the CLI should already be tested in the console.rb file 
# and then incorporated into the CLI

require 'pry'
require_relative './app/models/user'

animals = [
    {species: 'cat', name: 'mojo', noise: 'woof'}, #Caryn
    {species: 'cat', name: 'grady', noise: 'purrrrrr'}, #Jess
    {species: 'cat', name: 'jerry', noise: 'sneeze'}, #Gabriel
    {species: 'dog', name: 'april', noise: 'woof'},  #Gerard
    {species: 'cat', name: 'peyton', noise: 'scream'}, #Madeline
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
    puts "Welcome, would you like to sign up or log in?"
    action = gets.chomp 

    if action == "sign up"
        puts "What is your name?"
        name = gets.chomp 
        puts "What is your age?"
        age = gets.chomp 
        puts "What is your social security number?"
        ssn = gets.chomp 
        new_user = User.new(name, age, ssn)

        run
    elsif action == "log in"
        puts "What's your name?"
        user_name = gets.chomp
        user = User.all.find { |user| user.name == user_name }
        
        puts "Would you like to view your profile? (y/n)"
        choice = gets.chomp
        if choice == "y"
            user.view_profile
        end
    end

    binding.pry 
end



binding.pry 