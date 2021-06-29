class CreateProjectRequirementExcellers < ActiveRecord::Migration[6.0]
  def change
    create_table :project_requirement_excellers do |t|
      t.integer :project_requirement_id
      t.integer :exceller_id
      t.integer :state_id
      t.integer :performed_by
      t.datetime :date_performed
      t.text :comment
      t.boolean :current      
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
