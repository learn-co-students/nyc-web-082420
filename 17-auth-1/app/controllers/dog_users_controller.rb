class DogUsersController < ApplicationController

    def login
        # KNOWS TO LINK TO login.html.erb BECAUSE login METHOD_NAME MATCHES login.html.erb
    end


    def handle_login
        # params is a hash, with keys provided by the form_tag
        # the values of params is coming from the user-input

        @dog_user = DogUser.find_by(name: params[:name])

        if @dog_user && @dog_user.authenticate(params[:password])
            redirect_to candles_path
        else
            flash[:message] = "Incorrect Username or Password"
            redirect_to login_path
        end
    end

end
