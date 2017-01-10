Rails.application.routes.draw do
  # omniauth authentication
  post "/auth/:provider/callback", to: 'sessions#create'
  delete "/signout", as: :signout, to: 'sessions#destroy'
  get '/auth/failure', as: :failure, to: 'sessions#failure'
  
end
