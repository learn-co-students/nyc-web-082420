class Passenger 
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end 

  def self.all 
    @@all 
  end 

  def rides 
    Ride.all.select { |ride| ride.passenger == self }
  end 

  def drivers 
    rides.map { |ride| ride.driver }
  end 

  def total_distance
    distance = 0 
    self.rides.each { |ride| distance += ride.distance }
    distance.to_f
  end 

  def self.premium_members 
    all.select do |passenger| 
      passenger.total_distance > 100
    end 
  end 

end 