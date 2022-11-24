Rails.application.routes.draw do
  resources :comments
  resources :songs
  resources :playlists, only: [:index, :show, :update]
  resources :users, only: [:create, :index, :show, :update]

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
