Rails.application.routes.draw do
  resources :project_requirement_items
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
  post '/projects/async_get_project_requirements', to: 'projects#async_get_project_requirements'
  post '/projects/async_save_project_requirements', to: 'projects#async_save_project_requirements'
  post '/projects/async_get_project_requirement_items', to: 'projects#async_get_project_requirement_items'
  post '/projects/async_update_project_requirement_item', to: 'projects#async_update_project_requirement_item'
  post '/projects/async_edit_project_requirement', to: 'projects#async_edit_project_requirement'
  delete '/projects/delete_pr/:id', to: 'projects#delete_pr'
  delete '/projects/delete_prs/:id', to: 'projects#delete_prs'
  post '/projects/async_add_project_requirement_state', to: 'projects#async_add_project_requirement_state'
  post '/projects/async_get_project_requirement_states', to: 'projects#async_get_project_requirement_states'
  delete '/projects/delete_prf/:id', to: 'projects#delete_prf'
  post '/projects/async_add_project_requirement_flow', to: 'projects#async_add_project_requirement_flow'
  post '/projects/async_get_project_requirement_flows', to: 'projects#async_get_project_requirement_flows'
  post '/projects/async_get_pr_assigned_excellers', to: 'projects#async_get_pr_assigned_excellers'
  post '/projects/async_add_project_requirement_exceller', to: 'projects#async_add_project_requirement_exceller'
  
  post '/excellers/async_get_exceller_interviews', to: 'excellers#async_get_exceller_interviews'
  post '/excellers/async_save_exceller_interviews', to: 'excellers#async_save_exceller_interviews'
  post '/excellers/async_get_exceller_interview_items', to: 'excellers#async_get_exceller_interview_items'
  post '/excellers/async_update_exceller_interview_item', to: 'excellers#async_update_exceller_interview_item'
  delete '/excellers/delete_ei/:id', to: 'excellers#delete_ei'
  
  
  put 'users/:id/updatePermissions', to: 'users#updatePermissions'
  get 'users/:id/user_permissions', to: 'users#user_permissions'

  post 'dashboard/get_project_staffing_status', to: 'dashboard#get_project_staffing_status'
  post 'dashboard/get_required_assigned_excellers', to: 'dashboard#get_required_assigned_excellers'
  post 'dashboard/get_frequently_requested_skills', to: 'dashboard#get_frequently_requested_skills'
  post 'dashboard/get_new_excellers', to: 'dashboard#get_new_excellers'
  

  root to: 'dashboard#index'
end
