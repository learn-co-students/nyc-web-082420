require 'pry'
# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?

# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 

# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?

# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?

# 5. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?

# Pet Adoption application 
# Be able to see a list of all pet names 
# Be able to find all cats
# Be able to find a pet by name 

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


def run(animals_array)  
    ## defining the function - adding it to our dictionary
    puts "Welcome to the Pet Adoption CLI"
    puts "Choose an option by number"
    puts "1. See all pets"
    puts "2. See all cats"
    puts "3. Find a pet by name"
    user_input = gets.chomp #removes whitespace and new line characters
    if user_input == "1"
        # check into why this was printing the enum with spot in memory
        name_arr = animals_array.collect do |animal|
            animal[:name]
        end
        print name_arr
    elsif user_input == "2"
        all_cats = animals_array.filter { |animal| animal[:species] == 'cat' }
        # all_cat_names = all_cats.map do |animal|
        #     animal[:name]
        # end
        print all_cats
    elsif user_input == "3"
        puts "What is the animals name?"
        animal_name = gets.chomp
        print animals_array.find { |animal| animal[:name] == animal_name } 
        # binding.pry 
    end
    binding.pry 

end

binding.pry 
## invoke the function 
# run 