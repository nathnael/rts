class AddStartDateEndDateToProjectRequirement < ActiveRecord::Migration[6.0]
  def change
    add_column :project_requirements, :start_date, :date
    add_column :project_requirements, :end_date, :date
  end
end
