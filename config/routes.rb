Rails.application.routes.draw do
  namespace :api do
    resources :teams
    resources :groups do
      resources :cards
    end
  end
end
