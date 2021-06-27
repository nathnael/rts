class Interview < ApplicationRecord
    has_many :interview_criteria
    has_many :exceller_interviews
    belongs_to :position

    # accepts_nested_attributes_for :interview_criteria
end
