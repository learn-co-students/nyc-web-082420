class Driver 
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name 
    @@all << self
  end 

  def self.all 
    @@all 
  end 

  def rides 
    Ride.all.select { |ride| ride.driver == self}
  end 

  def passenger_names 
    self.rides.map { |ride| ride.passenger.name }.uniq
  end 

  ###create a helper method for mileage_cap
  def total_distance
    distance = 0 
    self.rides.each { |ride| distance += ride.distance }
    distance.to_f
  end 

  def self.mileage_cap(distance)
    self.all.select { |driver| driver.total_distance > distance }
  end 

  def stuff 
    Passenger.premium_members
  end 

  

end 