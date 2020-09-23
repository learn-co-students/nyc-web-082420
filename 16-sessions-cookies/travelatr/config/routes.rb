Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts, only: [:index, :show, :create, :new]
  resources :bloggers, only: [:index, :show]

  patch "/posts/like/:id", to: 'posts#like'
  patch "/session/reset_views", to: 'sessions#reset_views'
end
