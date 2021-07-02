class Skill < ApplicationRecord
    has_many :project_requirement_items
    has_many :interview_criteria
    has_many :skill_type_skills
    has_many :skill_types, through: :skill_type_skills
end
