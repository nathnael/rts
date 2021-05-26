class AddStreetNoToAddress < ActiveRecord::Migration[6.0]
  def change
    add_column :addresses, :street_no, :string
  end
end
