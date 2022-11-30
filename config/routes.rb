Rails.application.routes.draw do
  resources :song_playlists
  resources :genres
  resources :comments
  resources :songs
  resources :playlists
  resources :users, only: [:index, :create, :show, :update]

  post "/signup", to: "users#create"
  # get "/my-account", to: "users#show"
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get '/authorized_user', to: 'users#show'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
