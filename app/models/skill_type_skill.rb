class SkillTypeSkill < ApplicationRecord
    belongs_to :skill_type
    belongs_to :skill
end
