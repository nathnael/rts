class CreateExcellerInterviewItems < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_interview_items do |t|
      t.integer :exceller_interview_id
      t.integer :interview_criteria_id
      t.float :score
      t.text :comment
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
