class ProjectRequirement < ApplicationRecord
    belongs_to :project
    belongs_to :skill_type
    # has_many :project_requirement_items
end
