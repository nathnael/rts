class Project < ApplicationRecord
    has_many :project_requirements
    enum status: [:registered, :contract_signed, :resource_allocated, :initiated, :active, :suspended, :closed]
end
