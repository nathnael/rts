class CreateInterviewCriteria < ActiveRecord::Migration[6.0]
  def change
    create_table :interview_criteria do |t|
      t.integer :interview_id
      t.integer :skill_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
