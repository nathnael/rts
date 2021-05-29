class AddDobToExcellers < ActiveRecord::Migration[6.0]
  def change
    add_column :excellers, :dob, :date
  end
end
