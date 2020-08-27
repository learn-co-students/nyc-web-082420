class Animal
    attr_accessor :name, :noise, :owner, :intelligence
    attr_reader :species 
    @@all = []

    def initialize(species, name, noise, owner=nil) # =nil as default arg so we're ok without an owner
        @species = species
        @name = name
        @noise = noise
        @intelligence = 5
        @owner = owner # owner is an instance of User
        @@all << self # an instance of Animal
    end

    def self.all # could be Animal.all
        @@all
    end
    
    def self.find_by_name(search_name)
        self.all.find { |animal| animal.name == search_name }
    end

    def self.find_by_species(search_species)
        self.all.find_all { |animal| animal.species == search_species } # filter, select
    end

    def self.find_names_by_species(search_species)
        # self.all.filter { |animal| animal.species == search_species }.map { |animal| animal.name }
        self.all.filter do |a|
            a.species == search_species
        end.map do |a|
            a.name
        end
    end
# - `Animal.find_by_species` should take a string and return a list of all animals of that species



end