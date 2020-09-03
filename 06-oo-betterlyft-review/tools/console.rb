require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


# Put your variables here~!

pass1 = Passenger.new("Bryam")
pass2 = Passenger.new("Mamadou")
pass3 = Passenger.new("Ashab")

driver1 = Driver.new("Caryn")
driver2 = Driver.new("Greg")
driver3 = Driver.new("Eric")

ride1 = Ride.new(driver1, pass1, 5)
ride2 = Ride.new(driver2, pass2, 13)
ride3 = Ride.new(driver2, pass1, 56)
ride4 = Ride.new(driver3, pass3, 2)


binding.pry
