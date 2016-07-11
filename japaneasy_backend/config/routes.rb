Rails.application.routes.draw do

  get 'resources/index'

  scope path: "japaneasy" do
    resources :resources
  end

end