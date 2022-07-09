Rails.application.routes.draw do
  #devise_for :users
  # devise_for :users, controllers: { registrations: :registrations }
  root 'news#index'

  # get 'components/index'
  # root 'components#index'

  # post :toggle, to: 'locales#toggle'
  #resource :profile, only: [:edit, :update, :show]
  # get :user, to: 'users#index'
  # get 'user/edit', to: 'users#edit'
  # patch 'user/edit', to: 'users#update'
  # resource :user, only: [:edit, :update, :show]
  # resources :news
  # post :simple_rating, to: 'news#simple_rating'

  # get 'user/news/new', to: 'news#new'
  # get 'user/news/edit/:id', to: 'news#edit', as: 'user_news_edit'
  # get 'user/news/:id', to: 'news#show', as: 'user_news_show'
  # get 'user/news', to: 'news#index', as: 'user_news_index'

  #get 'user/profile/edit', to: 'profiles#edit'
  # namespace :user do
  #   resources :news
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :news

  namespace :api do
    namespace :v1 do
      resources :comments, only: [:index, :show, :create, :destroy]
    end
  end
end
