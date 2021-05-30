class Interview < ApplicationRecord
    has_many :interview_criteria
    # accepts_nested_attributes_for :interview_criteria
end
