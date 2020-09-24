Rails.application.routes.draw do
  
  resources :favorites
  resources :dog_users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :candles, only: [:index, :show, :new, :create, :edit, :update] 
  # resources :candles, except: [:destroy] 
  resources :candles

  # First route GETS the form for the user
  # Second route POSTS the information in the form to our server

  # HTTPVERB "URL", to: "CONTROLLER_NAME#METHOD_NAME"
  get "/login", to: "dog_users#login", as: "login"
  post "/login", to: "dog_users#handle_login"




  # get '/candles', to: "candles#index", as: "candles"
  # get '/candles/new', to: "candles#new", as: "new_candle"
  # get '/candles/:id', to: "candles#show", as: "candle"
  # get '/candles/:id/edit', to: "candles#edit", as: "edit_candle"

  # post '/candles', to: "candles#create"
  # patch '/candles/:id', to: "candles#update"
end

