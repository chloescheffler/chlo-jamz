Rails.application.routes.draw do
  resources :song_playlists
  resources :genres, only: [:index]
  resources :comments
  resources :songs
  resources :playlists
  resources :users, only: [:index, :create, :show, :update]

  post "/signup", to: "users#create"
  # get "/my-account", to: "users#show"
  post "/login", to: "sessions#create" # in Login.js
  delete "/logout", to: "sessions#destroy" # in Navbar.js
  get '/authorized_user', to: 'users#show' # in App.js

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
