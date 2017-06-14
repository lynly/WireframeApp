Rails.application.routes.draw do
  root "pages#index"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users
  resources :wireframes
  resources :elements
end
