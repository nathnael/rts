class AddDefaultMinimumScoreToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :default_minimum_score, :float
  end
end
