## OO Associations/Relationships: Many to Many

# Questions
- Lab specific (kind of); testing and method argument order 
    - TL;DR is the tests are written to expect a given order. Argument order matters
    - When there are tests, use them to figure out the right order for args 
    - Test Driven Development (TDD)
    -  def new_appointment(patient, doctor, time) and test expects new_appointment(time, patient, doctor)
- Does belongs_to = has_many
    - One-to-Many means there is both a belongs_to class and a has_many class 
    - We'll... get into Many-to-Many today 
- JD: method of calling one class's instance method from another class ****TODO DURING LECTURE****
- Ashab: One instance method receiving another instance as an argument ****TODO DURING LECTURE****
- Has_many, through: which class holds the reference?!?!?!?!?!

# Agenda
- Questions
- Review One to Many/Belongs to
- Discuss Has many, Through
- Update our Pet App! 

## One to Many

### Animal belongs to User
- needs to be initialized with user 
```
class Animal
    attr_accessor :owner # this points our instance variable owner, which will hold an instance of User
    @@all = []

    def initialize(name, species, owner)
        @name = name
        @species = species
        @owner = owner
        @@all << self
    end

    # we need out self.all method to access @@all
end
```
- holds reference to the other class's instance 
- needs to be able to access that user (so we'll need an animal_one.user method for instance)
     - attr_accessor is great for this! 



### User has many Animals
- name attribute 
- no instance variable referencing its animals
- we need a method to look at Animal.all to find all of its animals
```
class User
    # skipping attrs, @@all, initialize

    def animals
        Animal.all.filter { |animal| animal.owner == self }
    end
end
```


## Has Many Through
User has many Animals
Animal has many Users


Rules 
1. There has to be a join model (UserAnimal)
2. Just think of this as two has_many, belongs_to 


## Fair Game for CC?