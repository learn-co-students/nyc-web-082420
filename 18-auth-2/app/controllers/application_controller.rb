class ApplicationController < ActionController::Base
    # THIS WILL APPLY FOR ALL OF THE ACTIONS IN YOUR APP
    # Guarantees that you have access to the instance variable of @current_user in whatever action calls on authorized
        # sprinkle in some skip_before_actions in your controller
    before_action :authorized


    # Allows you to use this method in the views
    helper_method :logged_in?
    

    def set_current_user
        @current_user = DogUser.find_by(id: session[:dog_user])
    end

    def logged_in?
        # This method returns a boolean, depending on if there's a user logged in or not
        !!set_current_user
    end

    def authorized
        redirect_to new_dog_user_path unless logged_in?
    end

end
