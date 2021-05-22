class CreateExcellerAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_assignments do |t|
      t.integer :exceller_id
      t.integer :project_id
      t.integer :skill_id
      t.datetime :start_date
      t.datetime :end_date
      t.integer :status
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
