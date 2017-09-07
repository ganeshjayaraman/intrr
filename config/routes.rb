Rails.application.routes.draw do
  post 'events/reg'

  get 'sign/in_new'
  post 'sign/in_create'
  get 'sign/up_new'
  post 'sign/up_create'
  get 'sign/destroy'

  get 'main/index'
  root 'main#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
