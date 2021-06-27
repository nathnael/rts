class InterviewCriterium < ApplicationRecord
    belongs_to :interview
    belongs_to :skill
    has_many :exceller_interview_items
end
