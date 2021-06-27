class CreateExcellerInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_interviews do |t|
      t.integer :exceller_id
      t.integer :interviewer_id
      t.integer :interview_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
