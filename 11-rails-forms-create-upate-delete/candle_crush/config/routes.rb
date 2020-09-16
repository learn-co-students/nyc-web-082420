Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :candles, only: [:index, :show, :new, :create, :edit, :update] 
  # resources :candles, except: [:destroy] 
  resources :candles

  # get '/candles', to: "candles#index", as: "candles"
  # get '/candles/new', to: "candles#new", as: "new_candle"
  # get '/candles/:id', to: "candles#show", as: "candle"
  # get '/candles/:id/edit', to: "candles#edit", as: "edit_candle"

  # post '/candles', to: "candles#create"
  # patch '/candles/:id', to: "candles#update"
end

