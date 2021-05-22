class CreateExcellerSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_skills do |t|
      t.integer :exceller_id
      t.integer :skill_id
      t.integer :proficiency
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
