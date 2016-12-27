Rails.application.routes.draw do

  root 'application#ng'

  namespace :api do
    resources :beaches
  end
end
