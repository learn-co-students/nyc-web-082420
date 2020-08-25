require 'pry'

class User
    # macros!!!
    # attr_reader # ==> get
    attr_writer :ssn # ==> set 
    attr_accessor :name, :age # ==> both 


    # need this if you are initializing with some info 
    def initialize(name, age, ssn=1234)  # array of symbols 
        @name = name  # @name is an instance variable b/c of the @ 
        @age = age
        @ssn = ssn 
        # @birthday = '01/01/01'
    end
    
    def say_name 
        puts "Hi my name is #{@name}"
    end

    def view_profile # jessica.view_profile 
        puts "You are #{@name} and you are #{@age} years old"
    end

    # these are written by our attrs!!!
    # so if you're using attrs DO NOT WRITE THESE
    # def name
    #     @name 
    # end 

    # def age
    #     @age 
    # end 

    # def name=(arg)
    #     @name = arg 
    # end

    # def age=(arg)
    #     @age = arg 
    # end

    # def ssn=(arg)
    #     @ssn = arg 
    # end
end


# User.new()
jessica = User.new("Jessica", 47)
gabriel = User.new("Gabriel", 38, 1234)

# jessica.name 



# @ instance variable accessible in all instance methods 

# binding.pry 