class ProjectRequirementExceller < ApplicationRecord
    belongs_to :state, :class_name => 'ProjectRequirementState', :foreign_key => 'state_id'
    belongs_to :exceller   
    belongs_to :project_requirement 
end
