class User
    attr_writer :ssn
    attr_accessor :name, :age, :views
    @@all = []
    
    def initialize(name, age, ssn=1234) 
        @name = name
        @age = age
        @ssn = ssn 
        @views = 0 
        @@all << self
    end
    
    def self.all
        @@all
    end

    def user_animals
        UserAnimal.all.filter { |ua| ua.user == self }
    end

    def pets
        self.user_animals.map { |ua| ua.animal }
        # Animal.all.filter { |animal| animal.owner == self }
    end

    #   NEED TO UPDATE
    def adopt_animal(animal_instance)
        UserAnimal.new(self, animal_instance)
        # NO MORE!! B/C WE'RE HAS MANY THRU NOW animal_instance.owner = self 
    end

    #   NEED TO UPDATE
    def train_pet(pet_instance)
        if self.pets.include?(pet_instance)
        # NO MORE!! B/C WE'RE HAS MANY THRU NOW if pet_instance.owner == self
            pet_instance.intelligence += 5
            puts "You just trained #{pet_instance.name}! They're real tired now!"
        else
            puts "You can't train a pet who isn't yours! Check yo self!"
        end
    end
    
    def introduce 
        puts "Hi, my name is #{self.name}"
    end

    def view_profile 
        puts "You are #{self.name} and you are #{self.age} years old"
        increment_views
    end

    private

    def increment_views 
        self.views += 1
    end

end