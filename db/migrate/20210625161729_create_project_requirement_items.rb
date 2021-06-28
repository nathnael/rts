class CreateProjectRequirementItems < ActiveRecord::Migration[6.0]
  def change
    create_table :project_requirement_items do |t|
      t.integer :project_requirement_id
      t.integer :skill_id
      t.float :minimum_score
      t.text :description
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at
    end
  end
end
