Rails.application.routes.draw do

  root 'application#ng'

  namespace :api do
    resources :beaches, only: [:index, :show, :create, :update, :destroy]
  end

  get '*path', to: 'application#ng'
end
