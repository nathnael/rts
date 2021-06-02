class AddProjectIdToProjectRequirement < ActiveRecord::Migration[6.0]
  def change
    add_column :project_requirements, :project_id, :integer
  end
end
