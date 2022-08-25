Rails.application.routes.draw do
  resources :documents
  resources :tags
  resources :users

  post "/signup", to: "users#create"
  get "/auth", to: "sessions#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  get "/documents", to: "documents#show"
  post "/upload", to: "documents#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
