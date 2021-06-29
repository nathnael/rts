class CreateProjectRequirementStates < ActiveRecord::Migration[6.0]
  def change
    create_table :project_requirement_states do |t|
      t.integer :project_requirement_id
      t.string :name
      t.integer :order
      t.integer :type
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at
    end
  end
end
