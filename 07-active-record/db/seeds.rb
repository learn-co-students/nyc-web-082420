
User.destroy_all

johnnie = User.new({name: "Johnnie", age: 22, ssn: 1234}) # MASS ASSIGNMENT 
# if you need to check something here; like does the email already exist for a user 
johnnie.save 


ashab = User.create(name: "ashab", age: 22, ssn: 1234)
madeline = User.create(name: "madeline", age: 22, ssn: 1234)
chloe = User.create(name: "chloe", age: 22, ssn: 1234)

# grady = Animal.new('cat', 'grady', 'purrrrr') 
# mojo = Animal.new('cat', 'mojo', 'bark') 
# jerry = Animal.new('cat', 'jerry', 'sneeze') 
# appa = Animal.new('dog', 'appa', 'meow meow') 

# UserAnimal.new(johnnie, grady)
# UserAnimal.new(johnnie, jerry)
# UserAnimal.new(chloe, mojo)
# UserAnimal.new(ashab, appa)
# UserAnimal.new(madeline, grady)
# UserAnimal.new(chloe, grady)

# rake db:seed
# binding.pry 