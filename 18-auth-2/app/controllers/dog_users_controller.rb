class DogUsersController < ApplicationController
    skip_before_action :authorized, only: [:new, :create, :login, :handle_login]

    def new
        # byebug
        @dog_user = DogUser.new
    end

    def create
        @dog_user = DogUser.create(dog_user_params)
        if @dog_user.valid?
            session[:dog_user] = @dog_user.id
            redirect_to candles_path
        else
            redirect_to new_dog_user_path
        end
    end


    

    def login
        # KNOWS TO LINK TO login.html.erb BECAUSE login METHOD_NAME MATCHES login.html.erb
    end


    def handle_login
        # params is a hash, with keys provided by the form_tag
        # the values of params is coming from the user-input

        @dog_user = DogUser.find_by(name: params[:name])

        if @dog_user && @dog_user.authenticate(params[:password])
            session[:dog_user] = @dog_user.id
            redirect_to candles_path
        else
            flash[:message] = "Incorrect Username or Password"
            redirect_to login_path
        end
    end


    def logout
        session[:dog_user] = nil
        redirect_to login_path
    end


    private

    def dog_user_params
        params.require(:dog_user).permit(:name, :password, :password_confirmation)
    end

end
