class ExcellerInterview < ApplicationRecord
    belongs_to :exceller, :class_name => 'Exceller', :foreign_key => 'exceller_id'
    belongs_to :interviewer, :class_name => 'Exceller', :foreign_key => 'interviewer_id'
    belongs_to :interview
    has_many :exceller_interview_items
end
