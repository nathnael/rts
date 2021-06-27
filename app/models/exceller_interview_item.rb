class ExcellerInterviewItem < ApplicationRecord
    belongs_to :exceller_interview, :class_name => 'ExcellerInterview', :foreign_key => 'exceller_interview_id'
    belongs_to :interview_criterium, :class_name => 'InterviewCriterium', :foreign_key => 'interview_criteria_id'
end
