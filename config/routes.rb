Rails.application.routes.draw do
  root 'pages#home' # Define the root page

  get 'pages/home', as: 'home'
  get 'pages/catalog', as: 'catalog'
  get 'pages/products', as: 'products'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
