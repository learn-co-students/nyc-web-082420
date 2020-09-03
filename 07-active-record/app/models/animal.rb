class Animal
    attr_accessor :name, :noise
    attr_reader :species 
    @@all = []

    def initialize(species, name, noise) 
        @species = species
        @name = name
        @noise = noise
        @@all << self
    end

    def self.all 
        @@all
    end

    def user_animals
        UserAnimal.all.select { |ua| ua.animal == self }
    end

    def owners 
        self.user_animals.map { |ua_instance| ua_instance.user }
    end

    # def all_owner_intros
    #     self.owners.each do |user|
    #         user.introduce
    #     end
    # end
    
    # def self.find_by_name(search_name)
    #     self.all.find { |animal| animal.name == search_name }
    # end

    # def self.find_by_species(search_species)
    #     self.all.find_all { |animal| animal.species == search_species } 
    # end

    # def self.find_names_by_species(search_species)
    #     self.all.filter { |animal| animal.species == search_species }.map { |animal| animal.name }
    # end


end