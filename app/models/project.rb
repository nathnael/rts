class Project < ApplicationRecord
    enum status: [:registered, :contract_signed, :resource_allocated, :initiated, :active, :suspended, :closed]
end
