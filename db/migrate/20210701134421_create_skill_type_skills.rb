class CreateSkillTypeSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skill_type_skills do |t|
      t.integer :skill_type_id
      t.integer :skill_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
