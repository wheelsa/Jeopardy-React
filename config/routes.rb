Rails.application.routes.draw do
  namespace :api do
    resources :groups do
      resources :cards
    end
  end
end
