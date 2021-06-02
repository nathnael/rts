class ProjectRequirement < ApplicationRecord
    belongs_to :project
    belongs_to :skill_type
end
