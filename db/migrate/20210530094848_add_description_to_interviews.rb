class AddDescriptionToInterviews < ActiveRecord::Migration[6.0]
  def change
    add_column :interviews, :description, :text
  end
end
