# require 'pry'

# this is data that needs to be persisted that is not user generated 
# can also add info in here for testing purposes 
User.destroy_all
Animal.destroy_all

johnnie = User.new({name: "Johnnie", age: 22, ssn: 1234}) # MASS ASSIGNMENT 
# if you need to check something here; like does the email already exist for a user 
johnnie.save 


ashab = User.create(name: "ashab", age: 22, ssn: 1234)
madeline = User.create(name: "madeline", age: 22, ssn: 1234)
chloe = User.create(name: "chloe", age: 22, ssn: 1234)

grady = Animal.create(species: 'cat', name: 'grady', noise: 'purrrrr') #, user: johnnie) 
mojo = Animal.create(species: 'cat', name: 'mojo', noise: 'bark') #, user_id: ashab.id) 
jerry = Animal.create(species: 'cat', name: 'jerry', noise: 'sneeze') #, user: madeline) 
appa = Animal.create(species: 'dog', name: 'appa', noise: 'meow meow') #, user: madeline) 

UserAnimal.create(user: johnnie, animal: grady)
UserAnimal.create(user: johnnie, animal: jerry)
UserAnimal.create(user: chloe, animal: mojo)
UserAnimal.create(user: ashab, animal: appa)
UserAnimal.create(user: madeline, animal: grady)
UserAnimal.create(user: chloe, animal: grady)

# rake db:seed
# binding.pry 