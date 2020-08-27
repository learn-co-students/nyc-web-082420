class User
    attr_writer :ssn
    attr_accessor :name, :age, :views
    @@all = []
    
    def initialize(name, age, ssn=1234) # why is pet not in intialize like owner in Animal
        @name = name  
        @age = age
        @ssn = ssn 
        @views = 0 
        @@all << self
    end
    
    def self.all
        @@all
    end

    def pets
        # the has_many goes through the belongs_to class
        # grabs the all, and filters by the reference to itself 
        Animal.all.filter { |animal| animal.owner == self }
    end

    def adopt_animal(animal_instance)
        # change the animal_instance so owner points to the current user instance
        animal_instance.owner = self 
        # add that animal_instance to the array 
        # self.pets << animal_instance 
        # NO LONGER NECESSARY CAUSE WE'RE NOT TRACKING INSIDE OF THE INSTANCE
    end

    def train_pet(pet_instance)
        # if the pet belongs to this owner
        # if self.pets.find(pet_instance)
        # if self.pets.include?(pet_instance)
        # Want to CHECK THAT ARGUMENT IS A PET?
        #  pet_instance.instance_of? Animal
        if pet_instance.owner == self
            pet_instance.intelligence += 5
            puts "You just trained #{pet_instance.name}! They're real tired now!"
        else
            puts "You can't train a pet who isn't yours! Check yo self!"
        end
        # increase its intelligence by 5
        # print something helpful to the screen 
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