Rails.application.routes.draw do
  #devise_for :users
  devise_for :users, controllers: { registrations: :registrations }
  root 'home#index'

  post :toggle, to: 'locales#toggle'
  #resource :profile, only: [:edit, :update, :show]
  get :user, to: 'users#index'
  get 'user/edit', to: 'users#edit'
  patch 'user/edit', to: 'users#update'
  resource :user, only: [:edit, :update, :show]
  resources :news
  get 'user/news/new', to: 'news#new'
  get 'user/news/edit/:id', to: 'news#edit', as: 'user_news_edit'
  get 'user/news', to: 'news#index'
  #get 'user/profile/edit', to: 'profiles#edit'
  # namespace :user do
  #   resources :news
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
