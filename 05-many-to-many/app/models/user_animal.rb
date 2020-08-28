class UserAnimal
    attr_accessor :user, :animal
    @@all = []

    def initialize(user, animal) #, length_of_relationship=0)
        @user = user
        @animal = animal
        # you can have additional attributes if needed! 
        # @length_of_relationship = length_of_relationship
        @@all << self
    end

    def self.all
        @@all
    end
end