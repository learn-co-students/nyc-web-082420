class User < ActiveRecord::Base
    has_many :user_animals
    has_many :animals, through: :user_animals

    def pets
        self.animals
    end

    def introduce 
        puts "Hi, my name is #{self.name}"
    end

    def adopt_animal(animal_instance)
        UserAnimal.create(user: self, animal: animal_instance)
    end

    # def train_pet(pet_instance)
        ## HINT: might need to use .update here
    #     if self.pets.include?(pet_instance)
    #         pet_instance.intelligence += 5
    #         puts "You just trained #{pet_instance.name}! They're real tired now!"
    #     else
    #         puts "You can't train a pet who isn't yours! Check yo self!"
    #     end
    # end

end

    ## NO MORE
    ## ATTRS
    ## ANY OF OF THE CUSTOM READERS / WRITERS IF AR'S WORK FOR YOU 
    ## INITIALIZE
    ## @@ALL & RELATED, @@ALL << SELF, DEF SELF.ALL 