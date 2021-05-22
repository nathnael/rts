json.extract! project, :id, :name, :client_id, :status, :start_date, :end_date, :created_by, :modified_by, :deleted_at, :created_at, :updated_at
json.url project_url(project, format: :json)
