class SkillType < ApplicationRecord
    has_many :skill_type_skills
    has_many :skills, through: :skill_type_skills
end
