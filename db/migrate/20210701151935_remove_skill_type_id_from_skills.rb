class RemoveSkillTypeIdFromSkills < ActiveRecord::Migration[6.0]
  def change
    remove_column :skills, :skill_type_id, :integer
  end
end
