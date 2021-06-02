class RenameSkillIdtoSkillType < ActiveRecord::Migration[6.0]
  def change
    rename_column :project_requirements, :skill_id, :skill_type_id
  end
end
