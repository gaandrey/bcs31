Cite::Application.routes.draw do

  mount_roboto

  root :to => "pages#show", :slug => 'index'

  mount Ckeditor::Engine => '/ckeditor'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :feedbacks, :only => :create
  resources :pages
  resources :online_couriers, :only => :create
  get 'online_couriers' => 'online_couriers#new'

  localized do
    root :to => "pages#show", :slug => 'index'
    get ':slug' => 'pages#show', :as => :slug
    resources :pages
  end
end