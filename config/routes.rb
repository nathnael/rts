Rails.application.routes.draw do
  resources :employment_types
  resources :duty_stations
  resources :positions
  resources :exceller_assignments
  resources :exceller_offers
  resources :exceller_interviews
  resources :interview_criteria
  resources :interviews
  resources :exceller_skills
  resources :skill_types
  resources :skills
  resources :addresses
  resources :project_requirements
  resources :projects
  resources :clients
  resources :excellers
  devise_for :users
  resources :users
  resources :permissions
  
  # put '/invoices/assign_invoice/:id', to: 'invoices#assign_invoice'
  # get '/projects/async_save_project_requirement', to: 'projects#async_save_project_requirement'
  post '/projects/async_save_project_requirement', to: 'projects#async_save_project_requirement'
  post '/projects/async_remove_project_requirement', to: 'projects#async_remove_project_requirement'
  
  
  put 'users/:id/updatePermissions', to: 'users#updatePermissions'
  get 'users/:id/user_permissions', to: 'users#user_permissions'

  root to: 'dashboard#index'
end
