require 'pry'

class User
    attr_writer :ssn
    attr_accessor :name, :age, :views
    @@all = []
    
    def initialize(name, age, ssn=1234)
        @name = name  
        @age = age
        @ssn = ssn 
        @views = 0 
        @@all << self # self is about where am I? 
        # b/c I'm in an instance method, self is the instance 
    end
    
    def self.all
        @@all
    end
    
    # User # class
    # jess = User.new("Jessica", 39)
    # jess.introduce
    def introduce 
        puts "Hi, my name is #{self.name}"
    end

    def view_profile 
        puts "You are #{self.name} and you are #{self.age} years old"
        increment_views
    end


    # WARNING WE HAVE NO WAY TO ASSOCIATE USERS YET
    # THATS THURSDAY AND FRIDAY 
    # bakugo = User.new()
    # jess.play_cards_with(bakugo)
    # def play_cards_with(friend)
    #     friend.name  ## bakugo.name 
    #     self.name ## jessica.name
    # end

    private

    def increment_views 
        self.views += 1
    end

end



# binding.pry 