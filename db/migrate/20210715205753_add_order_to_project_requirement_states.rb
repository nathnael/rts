class AddOrderToProjectRequirementStates < ActiveRecord::Migration[6.0]
  def change
    add_column :project_requirement_states, :order, :integer
  end
end
