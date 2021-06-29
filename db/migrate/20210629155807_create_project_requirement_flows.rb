class CreateProjectRequirementFlows < ActiveRecord::Migration[6.0]
  def change
    create_table :project_requirement_flows do |t|
      t.integer :project_requirement_id
      t.string :name
      t.integer :initial_state_id
      t.integer :final_state_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
