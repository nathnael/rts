class ProjectRequirementFlow < ApplicationRecord
    belongs_to :project_requirement
    belongs_to :initial_state, :class_name => 'ProjectRequirementState', :foreign_key => 'initial_state_id'
    belongs_to :final_state, :class_name => 'ProjectRequirementState', :foreign_key => 'final_state_id'
end
