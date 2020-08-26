# More on Object Orientation

## Pre-lecture


### Assessments / Expectations
- Lab completion percentage 
- Blog completion (and quality) ==> talk about this next week! 
- Projects! 
- Code Challenge Round 1 
- Code Challenge Round 2 / Retake 

### Pro tip for labs ==> solution branch

### OO Practice Project Pt 1
- Be careful w/ naming conventions
  - Not following the file structure 
  - Variables & arguments (particularly instance variables) (doctor_name instead of name)
- Indentation and syntax
    - missing 'end's 
    - make sure you write the end for all your blocks immediately
    - make sure you're indenting so its easy to tell where those are 
    - test the code ie even just running the file `ruby app/models/patient.rb`
- Duplication with the attr's 
    - attr_accessor :name
    - attr_accessor :age 
    - becomes... attr_accessor :name, :age 
    - don't do duplicate work by writing your own methods + the attrs

```
# attr_accessor :hygiene
attr_reader :hygiene

def hygiene=(num)
    @hygiene = num
    if @hygiene > 10
        hygiene = 10
    end
end
```

## Questions
- Defining a method as `def self.method_name`
    - that method belongs to the class
    - to call it I'd run `User.method_name` instead of `jess.method_name`
- Methods and class constants
    - use class constants in method, but not modify them the same way
    - we'll use class variables 
- private methods - more to come! 
- class constants v class variables 
    - effectively, they do the same thing for you and theyre just different patterns
    - in the workforce youll see class vars mostly (@@var_name)


## Recap
- attr's, writers and readers
- instance variables
- Class syntax and how to create our blueprint

Instances are objects; we can act them with methods to view and manipulate their attributes
Classes are also objects; so we can create methods for those too. 

## Agenda
- Class methods
- `self`
- private methods

- A `User` should be able to log in
- `User.all` should return a list of all user instances 
- A `User` should be able to introduce themselves
    - `User#introduce` should return a string that says "Hi, my name is _____"
- A `User` should be able to keep track of number of profile views
    - `User#views` should return the number of times a user's profile has been viewed
    - Everytime a user's profile is viewed a message should puts to the screen saying "here is your profile"




Time permitting...
- A `Animal` class with a name (read and write-able) and a species (readable)
- `Animal.all` should return a list of all animal instances
- `Animal.find_by_name` should take in a string and return the animal with that name
- `Animal.find_by_species` should take a string and return a list of all animals of that species



## Icebox
- why symbol for attrs instead of @name? 
- BLOGZ?!? differences btwn `@@var`,`$var`, and `VAR` 
- How come sometimes you can put something in initialize and not its own writer method like the lab last night ===> Ashab 

Class Var & Class Constants Lab 

No - Let's look at that lab   <======> NOW 
Go Slower - Lets build animal class  <======>