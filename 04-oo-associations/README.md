# Ruby OO Relationships/Associations (One to Many)

## Questions
- When to add initialize methods? 
    - For Learn.co labs, look at the tests. If it says `Song.new` without parens, you don't need to write the initialize 
    - Need initialize for  `Song.new("My Title", "My Artist")`
- Require
    - Don't need to for files within the same folder 

## Agenda
- Build Animal Class to review class and instance variables and methods
- Types of Associations 
- One to Many/Has Many, Belongs to


## Types of Associations
On IG Users can have Followers 
Author -> Posts               ====> one to many example! 
    an author has many posts
    a post belongs to an author
Posts < --- > Tags               ====> many to many example! 


One to Many
Animal belongs to User
    Animal is our belongs to
User has many Animals
    User is our has many

The belongs to holds the reference (or collar) to the other instance 


## Deliverables 
Build Animal Class
- A `Animal` class with a name (read and write-able), 
a species (readable) and a noise (read and write-able)
- `Animal.all` should return a list of all animal instances

Build Animal & User Relationship 
- an animal needs to belong to a user
- an animal needs to know who its user is 
- an owner should also know who all of its animals are

Add to Animal Class
- `Animal.find_by_name` should take in a string and return the animal with that name
- `Animal.find_by_species` should take a string and return a list of all animals of that species

Add Relationship Methods
- Let's think of some together! 
- feed them!
- favorites
- training!!!  =>> owner can only train one of its pets and when it does that pets intelligence increases 
`Owner#train_pet(pet_instance)` owner can train the pet if it belongs to them and increase its intelligence by 5
- tricks!! 
- animal walk their owner 
- take em to the vet 


### Icebox
- save method sometimes...? ===> ActiveRecord .new and using .create
- Jake nil shovel error 