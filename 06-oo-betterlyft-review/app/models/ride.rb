class Ride 
  attr_reader :driver, :passenger, :distance
  @@all = []

  def initialize(driver, passenger, distance)
    @driver = driver 
    @passenger = passenger 
    @distance = distance
    @@all << self
  end 

  ### even tho the README doesn't ask for Ride.all, we will need it for Ride.average_distance!
  def self.all 
    @@all 
  end 

  def self.average_distance
    total_rides = Ride.all.length 
    total_distance = 0
    Ride.all.each do |ride| 
      total_distance += ride.distance
    end 
    total_distance / total_rides
  end 

end 
