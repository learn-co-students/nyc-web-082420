class SessionsController < ApplicationController
    def reset_views
        session[:views] = 0
        redirect_back(fallback_location: posts_path)
    end
end