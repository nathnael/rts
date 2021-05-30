class AddMinimumScoreToInterviewCriteria < ActiveRecord::Migration[6.0]
  def change
    add_column :interview_criteria, :minimum_score, :decimal
  end
end
