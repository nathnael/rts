class Client < ApplicationRecord
    enum status: [:registered, :on_pipeline, :signed, :active, :inactive, :suspended, :closed]
end
