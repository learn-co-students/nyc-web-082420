Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :candles, only: [:index, :show] 

  # get '/candles', to: "candles#index", as: "candles"
  # get '/candles/:id', to: "candles#show", as: "candle"


end

