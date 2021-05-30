class AddDescriptionToSkillTypes < ActiveRecord::Migration[6.0]
  def change
    add_column :skill_types, :description, :text
  end
end
