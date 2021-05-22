json.extract! client, :id, :name, :rep_name, :address_id, :status, :created_by, :modified_by, :deleted_at, :created_at, :updated_at
json.url client_url(client, format: :json)
