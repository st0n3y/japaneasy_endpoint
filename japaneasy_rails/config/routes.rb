Rails.application.routes.draw do
  resources :resources, defaults: { format: 'json' }
  get 'resources/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end