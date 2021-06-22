class Skill < ApplicationRecord
    belongs_to :skill_type
    has_many :project_requirement_items
end
