class Animal
    attr_accessor :name, :noise, :intelligence # GOES AWAY, :owner,
    attr_reader :species 
    @@all = []

    def initialize(species, name, noise) # GOES AWAY , owner=nil) 
        @species = species
        @name = name
        @noise = noise
        @intelligence = 5
        # @owner = owner  GOES AWAY
        @@all << self
    end

    def self.all 
        @@all
    end

    def user_animals
        # go through join model and grab just instances that have this animal
        UserAnimal.all.select { |ua| ua.animal == self }
    end

    def owners 
        # now that i have just the user_animals that belong to me
        # grab those users 
        self.user_animals.map { |ua_instance| ua_instance.user }
    end

    def all_owner_intros
        # print the intro for all users associated with the current pet 
        self.owners.each do |user|
            # clarity check: self.owners is an array of User instances
            # so user here is a a User instance 
            user.introduce
        end
    end
    
    def self.find_by_name(search_name)
        self.all.find { |animal| animal.name == search_name }
    end

    def self.find_by_species(search_species)
        self.all.find_all { |animal| animal.species == search_species } 
    end

    def self.find_names_by_species(search_species)
        self.all.filter { |animal| animal.species == search_species }.map { |animal| animal.name }
    end


end