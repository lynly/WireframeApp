Rails.application.routes.draw do
  root "pages#index"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  # AJAX
  post '/wireframes/:id/add_element' => 'elements#create'
  put '/elements/:id/update' => 'elements#update'

  resources :users
  resources :wireframes
  resources :elements
end
