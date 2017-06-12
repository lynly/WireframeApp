Rails.application.routes.draw do
  get 'session/new'

  root "pages#index"

  resources :users
  resources :wireframes
  resources :elements
end
