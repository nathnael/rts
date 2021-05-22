class CreateProjectRequirements < ActiveRecord::Migration[6.0]
  def change
    create_table :project_requirements do |t|
      t.integer :skill_id
      t.integer :amount
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
